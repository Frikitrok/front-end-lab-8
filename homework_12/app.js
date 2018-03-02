// Your code goes here
let rootNode = document.getElementById("root");

window.addEventListener('load', function(){
    if(window.location.hash) {
        createTankDetail(window.location.hash);
    } else {
        createTankPreview();
    }
});

window.addEventListener('hashchange', (e)=>{
    rootNode.removeChild(rootNode.firstChild);
    let hash = window.location.hash;
    console.log(hash);
    if(hash == '') {
        createTankPreview();
    } else {
        createTankDetail(hash);
    }
});


function createTankPreview() {
    let tankBlock = document.createElement('div');
    tankBlock.className = 'tank-preview';
    rootNode.appendChild(tankBlock);
    function createTankArr(parrent) {
        let title = document.createElement('h1');
        title.innerHTML = 'Most popular tanks';
        parrent.appendChild(title);
        tanks.forEach(element => {
            createTankThumbnail(element, parrent);
        });
    }  

    function createTankThumbnail(tank, parrent) {
        let tankNode = document.createElement('div');
        tankNode.className = 'tank';
        tankNode.setAttribute('title', 'Click to detail');
        tankNode.setAttribute('model', tank.model);
        let tankImg = document.createElement('img');
        tankImg.className = 'tank-img'
        tankImg.setAttribute('src', tank.preview);
        tankNode.appendChild(tankImg);
        let tankNational = document.createElement('img');
        tankNational.className = 'tank-national'
        tankNational.setAttribute('title', tank.country);
        tankNational.setAttribute('src', tank.country_image);
        tankNode.appendChild(tankNational);
        let tankLvl = document.createElement('span');
        tankLvl.innerHTML = tank.level;
        tankLvl.className = 'tank-lvl';
        tankNode.appendChild(tankLvl);
        let tankTitle = document.createElement('span');
        let tankModelTitle = tank.model;
        if(tankModelTitle.length > 17) {
            tankModelTitle = tankModelTitle.substring(0, 17) + '...';
        }
        tankTitle.innerHTML = tankModelTitle;
        tankTitle.setAttribute('title', tank.model);
        tankNode.appendChild(tankTitle);

        parrent.appendChild(tankNode);
    }
    createTankArr(tankBlock);

    let tankArray = document.getElementsByClassName('tank');
    for(let i = 0; i < tankArray.length; i++) {
        tankArray[i].addEventListener('click', (e) => {
            let targetModel = e.currentTarget.getAttribute('model');
            window.location.hash = targetModel;
        });
    }   
}

function createTankDetail(hash) {
    let model = hash.replace(/#/, '');
    let tank = tanks.find((el) => {
        if(el.model == model){
            return el;
        }
    });
    let tankDetail = createFastElement('div', 'tank-detail');
    rootNode.appendChild(tankDetail);
    let country = createFastElement('img', 'tank-detail-country');
    country.setAttribute('title', tank.country);
    country.setAttribute('src', tank.country_image);
    tankDetail.appendChild(country);
    tankDetail.appendChild(createFastElement('h1', 'tank-detail-titel', tank.model + ' ' + tank.level));
    let tankPreview = createFastElement('div', 'tank-detail-preview');
    tankPreview.appendChild(createFastElement('h2',null,'Preview'));
    let tankImg = createFastElement('img', 'tank-detail-img');
    tankImg.setAttribute('src', tank.preview);
    tankDetail.appendChild(tankPreview);
    tankPreview.appendChild(tankImg);
    let characteristic = createFastElement('div', 'tank-detail-characteristic');
    let titleTable = createFastElement('h2', null, 'Characteristic');
    let charTable = createFastElement('table', 'tank-detail-table');
    characteristic.appendChild(titleTable);
    characteristic.appendChild(charTable);
    let details = tank.details;
    for (key in details) {
        let charTr = createFastElement('tr');
        let charTd = createFastElement('td',null,key);
        let charTd2 = createFastElement('td',null,details[key]);
        charTr.appendChild(charTd);
        charTr.appendChild(charTd2);
        charTable.appendChild(charTr);
    }
    tankDetail.appendChild(characteristic);
    let back = createFastElement('a', 'back-to-list', 'Back to list view');
    tankDetail.appendChild(createFastElement('div', 'clear'));
    back.setAttribute('href', 'index.html');
    tankDetail.appendChild(back);
}

function createFastElement(element, className=null, html=null) {
    let node = document.createElement(element);
    if(className!=null) {
        node.className = className;
    }
    node.innerHTML = html;
    return node;
}

