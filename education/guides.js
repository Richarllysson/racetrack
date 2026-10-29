(function(root){
  'use strict';

  const guides={
    uniform:{
      id:'uniform',
      title:'Movimento uniforme: d = v·t',
      subject:'Cinemática · movimento uniforme',
      objective:'Investigar como a velocidade e o tempo afetam a posição no movimento uniforme.',
      question:'Qual posição final você prevê para v = 40 un/s durante 3 s?',
      parameters:'Velocidade constante e tempo de motor ligado; unidades didáticas do Sandbox.',
      procedure:'Registre a previsão com 40 un/s e 3 s. Execute; depois altere somente o tempo para 4 s e compare os registros.',
      model:'O modelo prevê d = v·t. Não use esta relação para descrever fases aceleradas.',
      discussion:'A posição inicial é considerada zero? A distância dobrou na mesma proporção do tempo?',
      simulator:'sandbox',
      defaultQuestion:'distance'
    },
    muv:{
      id:'muv',
      title:'Movimento acelerado: d = ½at²',
      subject:'Cinemática · movimento uniformemente variado',
      objective:'Investigar como aceleração e tempo afetam o deslocamento a partir do repouso.',
      question:'Qual deslocamento você prevê após 3 s com aceleração constante de 10 un/s²?',
      parameters:'Aceleração constante de 10 un/s² e tempo de aceleração; unidades didáticas do Sandbox.',
      procedure:'Registre a previsão com 10 un/s² e 3 s. Execute; repita mudando somente o tempo para 4 s.',
      model:'Para partida do repouso e aceleração constante, d = ½at².',
      discussion:'O deslocamento varia linearmente ou com o quadrado do tempo? Que hipótese inicial permite usar esta equação?',
      simulator:'sandbox',
      defaultQuestion:'distance'
    },
    projectile:{
      id:'projectile',
      title:'Movimento oblíquo: ângulo e alcance',
      subject:'Cinemática · lançamento oblíquo',
      objective:'Investigar como o ângulo altera o alcance e a altura máxima do lançamento.',
      question:'Qual será o alcance horizontal com V₀ = 22 un/s e θ = 45° nesta fase?',
      parameters:'Velocidade inicial de 22 un/s, ângulo em graus e gravidade definida pela fase da Campanha.',
      procedure:'Registre uma previsão de alcance a 45°. Execute; depois altere somente o ângulo e repita. Para investigar a altura, selecione essa grandeza antes de registrar a hipótese.',
      model:'Movimento oblíquo ideal sem resistência do ar. O ângulo de alcance máximo de 45° só vale quando as alturas inicial e final são iguais.',
      discussion:'Como as componentes Vx e Vy variam com o ângulo? A fase tem alturas inicial e final iguais?',
      simulator:'campaign',
      defaultQuestion:'range'
    },
    gravity:{
      id:'gravity',
      title:'Investigar a gravidade no Laboratório',
      subject:'Cinemática · lançamento oblíquo e gravidade',
      objective:'Investigar como diferentes valores de gravidade afetam o tempo de voo e o alcance.',
      question:'Qual alcance você prevê para a velocidade e o ângulo atuais neste desafio?',
      parameters:'Velocidade inicial, ângulo, altura inicial de 7 m e gravidade indicada no desafio do Laboratório.',
      procedure:'Registre a hipótese e execute uma tacada. Avance para um desafio com outro ambiente gravitacional; mantenha velocidade e ângulo e compare os registros. Confira os valores de g antes de concluir.',
      model:'Lançamento oblíquo ideal sem resistência do ar. Para comparar, registre a gravidade de cada desafio: o alvo e outras características procedurais também podem mudar.',
      discussion:'O tempo de voo e o alcance aumentaram ou diminuíram? Que variáveis além de g mudaram entre os desafios?',
      simulator:'lab',
      defaultQuestion:'range'
    },
    mathtrack:{
      id:'mathtrack',
      title:'Pista matemática: comparar inclinação e movimento',
      subject:'Modelagem matemática · pista curva',
      objective:'Relacionar a forma e a inclinação da pista matemática ao movimento calculado.',
      question:'Qual distância final você prevê para a configuração atual da pista?',
      parameters:'Pista sin(x/20)·16, domínio de 0 a 260, gravidade de 14 e atrito de 0,04 (unidades do modelo).',
      procedure:'Registre uma previsão de distância. Execute; depois carregue uma rampa linear nos exemplos, mantenha velocidade e demais parâmetros e compare os registros.',
      model:'Modelo simplificado com aceleração tangencial por gravidade e atrito. Não representa todas as forças de contato e rolamento de um veículo real.',
      discussion:'Como a inclinação e o atrito afetam o movimento? A energia mecânica se conserva neste modelo?',
      simulator:'sandbox',
      defaultQuestion:'distance'
    }
  };

  root.RacetrackLessons=Object.freeze(guides);
  if(typeof module==='object'&&module.exports)module.exports=root.RacetrackLessons;
})(typeof globalThis==='object'?globalThis:this);
