// add solution here

function theBeatlesPlay(musicians, instruments){
  var mus_inst_arr=[]
  for(var i=0;i<musicians.length;i++){
    mus_inst_arr.push(musicians[i]+" plays "+instruments[i]);
  }
  return mus_inst_arr;
}

function johnLennonFacts(jl_facts){
  var jl_new_arr=[];
  counter=jl_facts.length;
  while(counter>0){
    counter-=1;
    jl_new_arr.push(jl_facts[counter]+'!!!');
  }
}