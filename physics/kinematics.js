(function(root){
  'use strict';

  function requireFinite(name,value){
    if(!Number.isFinite(value))throw new RangeError(`${name} must be finite.`);
  }

  function requireNonNegative(name,value){
    requireFinite(name,value);
    if(value<0)throw new RangeError(`${name} must be non-negative.`);
  }

  function computeDistanceAt(phase,time,parameter){
    if(!phase||!['uniform','muv'].includes(phase.type))throw new TypeError('Expected a uniform or MUV phase.');
    requireNonNegative('phase.T',phase.T);
    requireNonNegative('time',time);
    requireFinite('parameter',parameter);
    const clampedTime=Math.min(time,phase.T);
    return phase.type==='uniform'
      ?parameter*clampedTime
      :0.5*parameter*clampedTime*clampedTime;
  }

  function finalVelocity(phase,parameter){
    if(!phase||!['uniform','muv'].includes(phase.type))throw new TypeError('Expected a uniform or MUV phase.');
    requireNonNegative('phase.T',phase.T);
    requireFinite('parameter',parameter);
    return phase.type==='uniform'?parameter:parameter*phase.T;
  }

  function stepAlongCurve({s,v,dt,gravity,friction,theta,totalLength}){
    requireFinite('s',s);
    requireFinite('v',v);
    requireNonNegative('dt',dt);
    requireNonNegative('gravity',gravity);
    requireNonNegative('friction',friction);
    requireFinite('theta',theta);
    requireNonNegative('totalLength',totalLength);
    const gravityAcceleration=-gravity*Math.sin(theta);
    const frictionAcceleration=Math.abs(v)>1e-4
      ?-friction*gravity*Math.cos(theta)*Math.sign(v)
      :0;
    let nextVelocity=v+(gravityAcceleration+frictionAcceleration)*dt;
    let nextPosition=s+nextVelocity*dt;
    if(nextPosition<0){
      nextPosition=0;
      nextVelocity=0;
    }
    if(nextPosition>totalLength){
      nextPosition=totalLength;
      nextVelocity=0;
    }
    return {s:nextPosition,v:nextVelocity};
  }

  function projectileInputs(phase,speed,angleDegrees){
    if(!phase)throw new TypeError('A projectile phase is required.');
    requireNonNegative('speed',speed);
    requireFinite('angleDegrees',angleDegrees);
    requireFinite('phase.gravity',phase.gravity);
    if(phase.gravity<=0)throw new RangeError('phase.gravity must be greater than zero.');
    const initialHeight=phase.initialHeight===undefined?0:phase.initialHeight;
    const initialX=phase.initialX===undefined?0:phase.initialX;
    requireNonNegative('phase.initialHeight',initialHeight);
    requireFinite('phase.initialX',initialX);
    return {initialHeight,initialX};
  }

  function projectileComponents(speed,angleDegrees){
    requireFinite('speed',speed);
    requireFinite('angleDegrees',angleDegrees);
    const angleRadians=angleDegrees*Math.PI/180;
    return {
      vx:speed*Math.cos(angleRadians),
      vy0:speed*Math.sin(angleRadians)
    };
  }

  function computeProjectileState(phase,speed,angleDegrees,time){
    const {initialHeight,initialX}=projectileInputs(phase,speed,angleDegrees);
    requireNonNegative('time',time);
    const {vx,vy0}=projectileComponents(speed,angleDegrees);
    const gravity=phase.gravity;
    return {
      x:initialX+vx*time,
      y:initialHeight+vy0*time-0.5*gravity*time*time,
      vx,
      vy0,
      vy:vy0-gravity*time,
      speed:Math.hypot(vx,vy0-gravity*time)
    };
  }

  function computeProjectileFlightTime(phase,speed,angleDegrees){
    const {initialHeight}=projectileInputs(phase,speed,angleDegrees);
    const {vy0}=projectileComponents(speed,angleDegrees);
    const gravity=phase.gravity;
    return (vy0+Math.sqrt(Math.max(0,vy0*vy0+2*gravity*initialHeight)))/gravity;
  }

  function computeProjectileMaxHeight(phase,speed,angleDegrees){
    const {initialHeight}=projectileInputs(phase,speed,angleDegrees);
    const {vy0}=projectileComponents(speed,angleDegrees);
    return vy0>0?initialHeight+vy0*vy0/(2*phase.gravity):initialHeight;
  }

  function computeProjectileRange(phase,speed,angleDegrees){
    const {initialX}=projectileInputs(phase,speed,angleDegrees);
    const flightTime=computeProjectileFlightTime(phase,speed,angleDegrees);
    return computeProjectileState(phase,speed,angleDegrees,flightTime).x-initialX;
  }

  const api=Object.freeze({
    computeDistanceAt,
    finalVelocity,
    stepAlongCurve,
    computeProjectileState,
    computeProjectileFlightTime,
    computeProjectileMaxHeight,
    computeProjectileRange
  });

  if(typeof module==='object'&&module.exports)module.exports=api;
  root.RacetrackPhysics=api;
})(typeof globalThis==='object'?globalThis:this);
