<?php
    function foo()
    {
        echo "Beispielfunktion.\n";
        return $retval;
    }
?>
<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Dreammachine - a web drummachine</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/13.3.9/Tone.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="app.js"></script>
    <style src="style.css"></style>
</head>

<body>
<h1>DreamMachine</h1>
<div class="sound-table">
    <span class="bpm-holder"><p>BPM</p><input type="value" onChange="changeBPM(this.value)" value="120"/><button class="button play" onCLick="sequencer()">►</button><button class="button stop" onCLick="stop()">■</button></span>
    <div id="samples" class="builtin-samples samples">
        <div class="sample">
            <div class="label">
                <p>Kick</p>
            </div>
            <div class="beats">
            <div class="beat button"><span></span></div>
            <div class="beat button"><span></span></div>
            <div class="beat button"><span></span></div>
            <div class="beat button"><span></span></div>
            <div class="beat button"><span></span></div>
            <div class="beat button"><span></span></div>
            <div class="beat button"><span></span></div>
            <div class="beat button"><span></span></div>
            </div>
        </div>
        <div class="sample">
            <div class="label">
                <p>Snare</p>
            </div>
            <div class="beats">
                <div class="beat button"><span></span></div>
                <div class="beat button"><span></span></div>
                <div class="beat button"><span></span></div>
                <div class="beat button"><span></span></div>
                <div class="beat button"><span></span></div>
                <div class="beat button"><span></span></div>
                <div class="beat button"><span></span></div>
                <div class="beat button"><span></span></div>
            </div>
        </div>
    </div>
    <div class="hr-line"></div>
    <h2>Lade eigene Samples hoch:</h2>
    <form method="post" enctype="multipart/form-data" >
        <input type="file" name="files[]">
        <input type="submit" value="Upload File" name="submit">
    </form>
</div>
</body>

</html>