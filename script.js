class HUMAN {
    constructor(obj) {
        this.name = obj.name;
        this.gender = obj.gender;
    }
}

class WOMAN extends HUMAN {
    constructor(obj) {
        super(obj)
        this.gender = 'Женский'
    }
}

class MAN extends HUMAN {
    constructor(obj) {
        super(obj)
        this.gender = 'Мужской'
    }
}

const human = new HUMAN({
    name: 'Имя',
    gender: 'Пол'
})

const woman = new WOMAN({
    name: 'Виктория'
})

const man = new MAN({
    name: 'Иван'
})

console.log(human);
console.log(woman);
console.log(man);




class SCROLL {
    constructor(set) {
        if (typeof set.el == 'string') {
            this.el = document.querySelector(set.el)
        } else if (set.el instanceof HTMLElement) {
            this.el = set.el
        }
        this.top = set.top;
        this.el.style.position = 'fixed';
        this.unit = set.unit;
        this.el.style.top = this.scroll();

        window.addEventListener('scroll', () => this.scroll())
        window.addEventListener('resize', () => this.scroll())
    }
    scroll() {
        this.window = this.scrollNumber();

        if (this.window - pageYOffset > 0) {
            this.el.style.top = this.window - pageYOffset + 'px'
        } else {
            this.el.style.top = 0;
        }
    }
    scrollNumber() {
        if (this.unit == 'px') {
            return this.top >= 0 ? this.top : 0;
        } else if (this.unit == '%' || this.unit == undefined) {
            return this.calc(window.innerHeight, this.top) - this.el.clientHeight;
        }
    }
    calc(height, top) {
        return height / 100 * top;
    }
}




const myScroll = new SCROLL({
    el: '.header__nav',
    top: 100
})










// ===================================================================




class MYRANDOM {
    constructor() {
        this.target = document.querySelector('.header__content');
        this.wrapperBox = document.querySelector('.header');
        this.wrapperBox.style.position = 'relative';
        this.target.addEventListener('mouseover', () => this.onMouse())
    }
    onMouse() {
        this.ran = Math.round((Math.random() * 81));
        this.run = Math.round((Math.random() * 81));
        this.target.style.position = 'absolute'
        this.target.style.top = this.ran + '%'
        this.target.style.right = this.run + '%'

    }

}

const myRandom = new MYRANDOM({
    top: 0,
    right: 0
})



// =================================================================================================

class OPENBURGER {
    constructor(set) {
        this.open = document.querySelector(set.openButton);
        this.close = document.querySelector(set.closeButton);
        this.burger = document.querySelector(set.burger);
        this.wrapper = document.querySelector(set.wrapper);
        this.speed = set.openSpeed;



        this.open.addEventListener('click', () => this.openBurger());
        this.close.addEventListener('click', () => this.closeBurger());
        this.wrapper.addEventListener('click', () => this.closeBurger());
    }
    

    openBurger() {
        this.wrapper.style.display = 'block'
        this.burger.style.left = 0;
        this.burger.style.transition = this.speed + 's';
    }
    closeBurger(){
        this.wrapper.style.display = 'none';
        this.burger.style.left = -100 + '%';
        this.burger.style.transition = this.speed + 's';
    }
}

const burger = new OPENBURGER({
    openSpeed: 0.5,
    burger: '.burger-plugin',
    openButton: '.open-burger',
    closeButton: '.button-close',
    wrapper: '.overflow-wrapper'
})