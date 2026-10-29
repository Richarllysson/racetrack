'use strict';

const test=require('node:test');
const assert=require('node:assert/strict');
const physics=require('../physics/kinematics.js');

const approximately=(actual,expected,tolerance=1e-9)=>{
  assert.ok(Math.abs(actual-expected)<=tolerance,`expected ${actual} to be within ${tolerance} of ${expected}`);
};

test('uniform motion clamps elapsed time to the phase duration',()=>{
  const phase={type:'uniform',T:3};
  approximately(physics.computeDistanceAt(phase,2,40),80);
  approximately(physics.computeDistanceAt(phase,5,40),120);
  approximately(physics.finalVelocity(phase,40),40);
});

test('uniformly accelerated motion starts from rest',()=>{
  const phase={type:'muv',T:3};
  approximately(physics.computeDistanceAt(phase,3,10),45);
  approximately(physics.finalVelocity(phase,10),30);
});

test('curved-track step applies gravity, friction and boundary clamps',()=>{
  const flat=physics.stepAlongCurve({s:0,v:5,dt:0.1,gravity:10,friction:0.1,theta:0,totalLength:10});
  approximately(flat.v,4.9);
  approximately(flat.s,0.49);

  const downhill=physics.stepAlongCurve({s:0,v:0,dt:0.1,gravity:10,friction:0,theta:-Math.PI/6,totalLength:10});
  approximately(downhill.v,0.5);
  approximately(downhill.s,0.05);

  const boundary=physics.stepAlongCurve({s:9.9,v:2,dt:0.1,gravity:0,friction:0,theta:0,totalLength:10});
  approximately(boundary.s,10);
  approximately(boundary.v,0);
});

test('projectile motion resolves degrees and returns consistent equal-height results',()=>{
  const phase={gravity:10,initialHeight:0};
  const state=physics.computeProjectileState(phase,20,30,1);
  approximately(state.x,10*Math.sqrt(3));
  approximately(state.y,5);
  approximately(state.vx,10*Math.sqrt(3));
  approximately(state.vy,0);
  approximately(physics.computeProjectileFlightTime(phase,20,30),2);
  approximately(physics.computeProjectileMaxHeight(phase,20,30),5);
  approximately(physics.computeProjectileRange(phase,20,30),20*Math.sqrt(3));
});

test('vertical launch and drop from a positive height use the general flight equation',()=>{
  const verticalLaunch={gravity:10,initialHeight:0};
  approximately(physics.computeProjectileFlightTime(verticalLaunch,10,90),2);

  const drop={gravity:10,initialHeight:20};
  approximately(physics.computeProjectileFlightTime(drop,0,0),2);
  approximately(physics.computeProjectileMaxHeight(drop,0,0),20);
  approximately(physics.computeProjectileMaxHeight(drop,10,-90),20);
});

test('initial horizontal position offsets states but not horizontal range',()=>{
  const phase={gravity:10,initialHeight:5,initialX:3};
  const state=physics.computeProjectileState(phase,10,0,1);
  approximately(state.x,13);
  approximately(state.y,0);
  approximately(physics.computeProjectileRange(phase,10,0),10);
});

test('invalid phase and non-finite parameters fail explicitly',()=>{
  assert.throws(()=>physics.computeDistanceAt({type:'unknown',T:1},1,1),TypeError);
  assert.throws(()=>physics.computeDistanceAt({type:'uniform',T:1},Infinity,1),RangeError);
  assert.throws(()=>physics.computeProjectileFlightTime({gravity:0},10,45),RangeError);
  assert.throws(()=>physics.computeProjectileState({gravity:9.81},10,45,NaN),RangeError);
});

test('guided lessons contain the required classroom fields',()=>{
  const lessons=require('../education/guides.js');
  const required=['id','title','subject','objective','question','parameters','procedure','model','discussion','simulator','defaultQuestion'];
  assert.equal(Object.keys(lessons).length,5);
  for(const [key,lesson] of Object.entries(lessons)){
    assert.equal(lesson.id,key);
    for(const field of required)assert.ok(lesson[field],`${key} is missing ${field}`);
  }
});
