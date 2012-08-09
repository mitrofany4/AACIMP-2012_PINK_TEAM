/**
 * Created with JetBrains WebStorm.
 * User: Dimon
 * Date: 09.08.12
 * Time: 14:25
 * To change this template use File | Settings | File Templates.
 */

document.body.addEventListener('touchmove', function(event) {
    event.preventDefault();
    }, false);
setTimeout(function () {
    window.scrollTo(0, 1);
    }, 1000);
canvas.addEventListener('touchmove', function(event) {
    renderTouches(event.touches);
    }, false);

