// Replace ./data.json with your JSON feed
const reader = () => {
    fetch('./cv.json').then(response => {
        return response.json();
    }).then(data => {
        
        const intro = data.intro;
        const summary = data.summary;

        intro.socials.forEach(el => {
            console.log(el.title);
            console.log(el.link);
            console.log(el.subtitle);
        });

        summary.forEach(el => {
            console.log(el.title);
        });


    }).catch(err => {
        console.log(err); 
    });
};

export default reader;