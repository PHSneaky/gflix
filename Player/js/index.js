var state = 'stop';


function buttonPlayPress() {
    if (state == 'stop') {
        state = 'play';
        var button = d3.select("#button_play").classed('btn', true);
        button.select("i").attr('class', "fa fa-pause");
    }
    else if (state == 'play' || state == 'resume') {
        state = 'pause';
        d3.select("#button_play i").attr('class', "fa fa-play");
    }
    else if (state == 'pause') {
        state = 'resume';
        d3.select("#button_play i").attr('class', "fa fa-pause");
    }
}

function buttonStopPress() {
    state = 'stop';
    var button = d3.select("#button_play").classed('btn-success', false);
    button.select("i").attr('class', "fa fa-play");
}