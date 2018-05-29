function animate( node, target ) {
    var direction = target > node.offsetLeft ? 1 : -1;
    var step = 10;
    var interval = 10;

    if ( target === node.offsetLeft ) return;

    clearInterval( node.intervalId );

    node.intervalId = setInterval(function () {
        var left = node.offsetLeft;
        left += direction * step;

        if ( Math.abs( left - target ) <= step ) {
            node.style.left = target + 'px';
            clearInterval( node.intervalId );
            return;
        }

        node.style.left = left + 'px';
    }, interval);
}
