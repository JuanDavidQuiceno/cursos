<?php

$file = fopen("./results.csv", "r");
$match = 0;
$nomatch = 0;
$count = 0;
$empate = 0;
$winLocal = 0;

$t = time();

while(!feof($file)){
    $line = fgets($file);
    // 1872-11-30,Scotland,England,0,0,Friendly,Glasgow,Scotland,FALSE
    if(preg_match(
        '/^(\d{4,4}\-\d{2,2}-\d{2,2}),([\w \-\.ãçíéí&]+),([\w \-\.]+),(\d+),(\d+),.*$/i',
        $line,
        $m
    )){
        // print_r($m);
        if($m[4]==$m[5]){
            print_r("empate: ");
        }else if($m[4]>$m[5]){
            echo("local:  ");    
        }else{
            echo("visitante: ");
        }
        printf("\t%s vs %s [%s-%s]\n", $m[2], $m[3], $m[4], $m[5]);
        $match++;
    }else{
        $nomatch++;
        // print_r($line);
    }
}
fclose($file);

printf("\n\nmatch %d\nno match %d\n", $match, $nomatch);
printf("tiempo: %d\n", time()-$t);