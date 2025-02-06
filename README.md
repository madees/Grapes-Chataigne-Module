# Grapes-Chataigne-module
This is a module to control Grapes 3D Audio Control, which is a software developed by Not a Number - studio for 3D audio.

More info about Chataigne : https://benjamin.kuperberg.fr/chataigne

More info about Grapes : https://grapes-3d.com/

## OSC Output
This module is output only, OSC output is set to Local as default.
If Grapes doesn't run on the same computer as Chataigne, just change OSC output in module parameters to fit you're Grapes computer IP.

## Commands
This module send all the commands defined in Grapes v1.1.0.  
Play : start playing from start  
Stop : stop playing and reset from start  
Pause : stop playing but keep position  
Resume : start playing from actual position  
Their "force" variants will be usefull if you use quantized (bar or beat) trigger mode : in that case, the triggering will wait for bar/beat tick. If you use "force" commands, it will start immediately as in free trigger mode.  

### For Clips :
Commands parameters are track (integer, 1-64) and clip (integer, 1-16) index.
- resume
- forcerresume
- play
- forceplay
- stop
- forcestop
- pause
- forcepause

### For Rows :
Commands parameter is row index (1-16).
- play
- forceplay
- resume
- forceresume
- pause
- forcepause
- stop
- forcestop

