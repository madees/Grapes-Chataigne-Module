/* Chataigne Module for Grapes software OSC control v1.0.0 (c) Mathieu Delquignies, 02/2025
===============================================================================

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
1. Redistributions of source code must retain the above copyright notice,
this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation
and/or other materials provided with the distribution.
3. The name of the author may not be used to endorse or promote products
derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED "AS IS" AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
===============================================================================
*/

/**
 * This function is called automatically by Chataigne when you add the module in your Noisette.
 */
function init() {
  local.scripts.setCollapsed(true);
}

/**
 * Callbacks for Commands
 */

/**
 * clip resume
 * @param {integer} track 
 * @param {integer} index 
 */
function clipResume(track,index) 
{
  local.send("/Grapes/track/"+track+"/clip/"+index+"/resume");
}

/**
 * clip force resume
 * @param {integer} track 
 * @param {integer} index 
 */
function clipForceResume(track,index) 
{
  local.send("/Grapes/track/"+track+"/clip/"+index+"/forceresume");
}

/**
 * clip play
 * @param {integer} track 
 * @param {integer} index 
 */
function clipPlay(track,index) 
{
  local.send("/Grapes/track/"+track+"/clip/"+index+"/play");
}

/**
 * clip force play
 * @param {integer} track 
 * @param {integer} index 
 */
function clipForcePlay(track,index) 
{
  local.send("/Grapes/track/"+track+"/clip/"+index+"/forceplay");
}

/**
 * clip stop
 * @param {integer} track 
 * @param {integer} index 
 */
function clipStop(track,index) 
{
  local.send("/Grapes/track/"+track+"/clip/"+index+"/stop");
}

/**
 * clip force stop
 * @param {integer} track 
 * @param {integer} index 
 */
function clipForceStop(track,index) 
{
  local.send("/Grapes/track/"+track+"/clip/"+index+"/forcestop");
}

/**
 * clip pause
 * @param {integer} track 
 * @param {integer} index 
 */
function clipPause(track,index) 
{
  local.send("/Grapes/track/"+track+"/clip/"+index+"/pause");
}

/**
 * clip force pause
 * @param {integer} track 
 * @param {integer} index 
 */
function clipForcePause(track,index) 
{
  local.send("/Grapes/track/"+track+"/clip/"+index+"/forcepause");
}

/**
 * row play
 * @param {integer} index 
 */
function rowPlay(index) 
{
  local.send("/Grapes/row/"+index+"/play");
}

/**
 * row force play
 * @param {integer} index 
 */
function rowForcePlay(index) 
{
  local.send("/Grapes/row/"+index+"/forceplay");
}

/**
 * row resume
 * @param {integer} index 
 */
function rowResume(index) 
{
  local.send("/Grapes/row/"+index+"/resume");
}

/**
 * row force resume
 * @param {integer} index 
 */
function rowForceResume(index) 
{
  local.send("/Grapes/row/"+index+"/forceresume");
}

/**
 * row pause
 * @param {integer} index 
 */
function rowPause(index) 
{
  local.send("/Grapes/row/"+index+"/pause");
}

/**
 * row force pause
 * @param {integer} index 
 */
function rowForcePause(index) 
{
  local.send("/Grapes/row/"+index+"/forcepause");
}

/**
 * row stop
 * @param {integer} index 
 */
function rowStop(index) 
{
  local.send("/Grapes/row/"+index+"/stop");
}

/**
 * row force stop
 * @param {integer} index 
 */
function rowForceStop(index) 
{
  local.send("/Grapes/row/"+index+"/forcestop");
}

