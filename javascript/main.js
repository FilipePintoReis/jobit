var events = [
    // 4th April
	{
		name: "Opening",
		description: ""
	},
	{
		name: "XpandIT",
		description: ""
	},
    {
		name: "Critical Software",
		description: ""
	},
    {
		name: "Accenture",
		description: ""
	},
    {
		name: "Bosch",
		description: ""
	},
    {
		name: "Coffee Break",
		description: ""
	},
    {
		name: "Blip",
		description: ""
	},
    {
		name: "HostelWorld",
		description: ""
	},
    {
		name: "Life On Mars",
		description: ""
	},
    {
		name: "Jscrambler",
		description: ""
	},
    {
		name: "Speed Networking",
		description: ""
	},
    
    // 11th April
    {
		name: "Opening",
		description: ""
	},
	{
		name: "Farfetch",
		description: ""
	},
    {
		name: "Sonae Bit",
		description: ""
	},
    {
		name: "TalkDesk",
		description: ""
	},
    {
		name: "eProseed",
		description: ""
	},
    {
		name: "Coffee Break",
		description: ""
	},
    {
		name: "Glintt",
		description: ""
	},
    {
		name: "XING",
		description: ""
	},
    {
		name: "Critical Manufacturing",
		description: ""
	},
    {
		name: "Natixis",
		description: ""
	},
    {
		name: "Speed Networking",
		description: ""
	},
    
    // 18th April
    {
		name: "Opening",
		description: ""
	},
	{
		name: "Fabamaq",
		description: ""
	},
    {
		name: "Abyssal",
		description: ""
	},
    {
		name: "KPMG",
		description: ""
	},
    {
		name: "CERN",
		description: ""
	},
    {
		name: "Coffee Break",
		description: ""
	},
    {
		name: "Feedzai",
		description: ""
	},
    {
		name: "Microsoft",
		description: ""
	},
    {
		name: "Mindera",
		description: ""
	},
    {
		name: "Vizzuality",
		description: "<p>Company description</p>"
	},
    {
		name: "Speed Networking",
		description: ""
	}
]

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var stop = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function() {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function() {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            stop = true;
            window.setTimeout(function() {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    var us = window.setInterval(function() {
       /* if (stop) {
            con.className = 'console-underscore hidden';
            clearInterval(us);
        } else {*/
            if (visible === true) {
                con.className = 'console-underscore hidden'
                visible = false;

            } else {
                con.className = 'console-underscore'

                visible = true;
            }
        //}
    }, 400)
}

jQuery(document).ready(function($){
    consoleText(['4th, 11th and 18th April'], 'text', ['white']);
    
    $(function() {
      $('#scroll-down-btn').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
      });
    });
    
    $('#programModal').on('shown.bs.modal', function (e) {
        var id = e.relatedTarget.dataset['id']
        $(this).find('.modal-title').text(events[id].name)
        $(this).find('.modal-body').html(events[id].description)
    })
});