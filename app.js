// jQuery methods go here...
$(function(){
  $('.sound-table').on('click','.button', function(){
    $( this ).toggleClass( 'checked' );
    if ($( this ).attr('data-check') == 'true') {
      $( this ).attr( 'data-check', 'false' );
    } else {
      $( this ).attr( 'data-check', 'true' );
    }
  });
});

var playing = false;
var init = false;
var sounds = [];
var sampleList = [];

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
 }

function stop(){
  Tone.Transport.stop();
  playing = false;
  document.querySelector('.play').classList.remove('checked');
}

function changeBPM(v){
  Tone.Transport.bpm.value = v;
}

function generatePlaylist(){
  sampleList = [];
  var sample = document.querySelector('.samples').firstElementChild;
  while (sample)
      {
        sampleList.push(sample);
        sample=sample.nextElementSibling;
      }
}

function sequencer() {
  if(playing==false){
  playing = true;
  document.querySelector('.stop').classList.remove('checked'); 
  if(init==false){
    generatePlaylist();
    let index = 0;
    Tone.Transport.scheduleRepeat(repeat, "8n");
    init = true;
    function repeat() {
      let step = index % 8;

      for(i = 0;i<sampleList.length;i++){
        let Input = sampleList[i].querySelector(
          `.sample .beat:nth-child(${step + 1})`
        );
        if (Input.dataset.check == "true") {
          sounds[i].start();
        }
      }
      index++;
    }
  }
  Tone.Transport.start();
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  sounds.push(new Tone.Player("./drums/kick-electro01.wav").toMaster());
  sounds.push(new Tone.Player("./drums/snare-lofi02.wav").toMaster());
  const url = 'process.php';
  const form = document.querySelector('form');

  form.addEventListener('submit', e => {
    console.log("Upload");
    e.preventDefault();

    const files = document.querySelector('[type=file]').files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
        let file = files[i];

        formData.append('files[]', file);
    }

    fetch(url, {
        method: 'POST',
        body: formData
    }).then(response => {
        addCustomSample(files);
    });
  });
});

function addCustomSample(f){
  var fileUrl = "./uploads/" + f[0].name;
  var xmlhttp = new XMLHttpRequest ();
    xmlhttp.onreadystatechange=function () {
      if (xmlhttp.readyState ==4 && xmlhttp.status==200) {
        //document.getElementById ("custom-samples").innerHTML=xmlhttp.responseText;
        document.getElementById ("samples").insertAdjacentHTML('beforeend', xmlhttp.responseText);
      }
    }
    xmlhttp.open ("GET", "addCustomSample.php?sampleName=" + f[0].name, true);
    xmlhttp.send ();
    sounds.push(new Tone.Player(fileUrl).toMaster());
    generatePlaylist();
}
