#!/usr/bin/perl

use strict;
use warnings;

my $t = time;
open(my $f, "<./results.csv")
or die("no hay archivo");

my $match = 0;
my $nomatch = 0;

while(<$f>) {
    # 1872-11-30,Scotland,England,0,0,Friendly,Glasgow,Scotland,FALSE
    # print($_)
    chomp;
    if(m/^[\d]{4,4}\-02.*$/){
        print($_."\n");
        $match++;
	} else {
		$nomatch++;
	}
}

close($f);

print("Se encontraron \n - %d matches\n - %d no matches\ntardo %d segundos\n"
	, $match, $nomatch, time() - $t);