// Looping a triangle

/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

let layer = "";

for (let i = 0; i < 7; i++) {
  layer += "#";
  console.log(layer);
}
