const dataURL = "https://api.myjson.com/bins/jcmhn";

const fields = ['var1', 'var2', 'var3', 'var4', 'var5', 'var6', 'speach']
function getFormValues(){
  let values ={};
  fields.forEach(function(field/*, index*/){
   values[field]=$('input[name=' + field + ']')[0].value;

  });
  // let values = {
  //      var1:$('input[name=var1]')[0].value,
  //      var2: $('input[name=var2]')[0].value,
  //       var3: $('input[name=var3]')[0].value,
  //      var4: $('input[name=var4]')[0].value,
  //      var5: $('input[name=var5]')[0].value,
  //      var6: $('input[name=var6]')[0].value,
  //      speach: $('input[name=speach]')[0].value,
  //    }
     return values;
}


function handleButton(e) {
  // взять данные по dataUrl, вытащить их и передать в handleData
  $.getJSON(dataURL, handleData);
  $('form').hide();
  //$('form').show();
  e.preventDefault();
}
function handleData(data) {
  let Message = '';
//  let var1 = $('input[name=var1]')[0].value;
//  let var2 = $('input[name=var2]')[0].value;
//   let var3 = $('input[name=var3]')[0].value;
//  let var4 = $('input[name=var4]')[0].value;
//  let var5 =$('input[name=var5]')[0].value;
//  let var6 = $('input[name=var6]')[0].value;
//  let speach = $('input[name=speach]')[0].value;
 let values = getFormValues();
//  let obj ={
//    var1:$('input[name=var1]')[0].value,
//    var2: $('input[name=var2]')[0].value,
//     var3: $('input[name=var3]')[0].value,
//    var4: $('input[name=var4]')[0].value,
//    var5: $('input[name=var5]')[0].value,
//    var6: $('input[name=var6]')[0].value,
//    speach: $('input[name=speach]')[0].value,
//  };

  data['text'].forEach(function(line/*, index*/){
    for(key in values){
      line = line.replace('{'+key+ '}', values[key]);
    }
    // item = item.replace('{var1}', var1);
    // item = item.replace('{var2}', var2);
    // item = item.replace('{var3}', var3);
    // item = item.replace('{var4}', var4);
    // item = item.replace('{var5}', var5);
    // item = item.replace('{var6}', var6);
    // item = item.replace('{speach}', speach);
    // //console.log('hello', item);
   Message += line +'<br><br>';
  });
  //console.log(text);
  $('div#result').html(Message);
  // кажется, какой-то из этих способов сработает
  //const var1 = $("input[name=var1]")[0].value()
  //const var1 = $("input[name=var1]").value()
  //const var1 = $("input[name=var1]")[0].default()

  // надо сделать так чтобы сообщения подменились на значения из формы
  // let text = "Здесь могла быть ваша реклама";
 //$("#result").text(text);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
