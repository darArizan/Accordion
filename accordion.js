import { data, data2 } from "./data.js";

class Utility {
    static createEl(type, className, index) {
        let el = document.createElement(type);
        el.className = className;
        el.setAttribute("data-id", index)
        return el;

    }
}

class Accordion {
    constructor(data, parentEl) {
        this.data = data;
        this.parent = document.querySelector(parentEl)
        this.selectors = {
            ctx: ".accordion-wrapper",
            button: ".accordionBtn",
            wrapper: ".contentContainer",
            text: ".accordionContent"
        }
        this.dynamicSelectors = {
            ctx: "accordion-wrapper",
            button: "accordionBtn",
            wrapper: "contentContainer",
            text: "accordionContent"
        }
        this.stateClasses = {
            buttonActive: "accordion__button--active",
            divContentActive: "accordion__content--active"
        }
    }

    init() {

        this.ctx = this.createCtx()
        this.data.items.forEach((el,i) => {
            this.createAccordion(el,i)
        });
    }

    createCtx() {

        const ctx = document.createElement("section");
        ctx.classList.add(this.dynamicSelectors.ctx);
        return ctx;

    }

    createAccordion(el,index) {
        // button
        let accordionBtn = Utility.createEl('button', this.dynamicSelectors.button, index);
        accordionBtn.textContent = el.title;
        accordionBtn.addEventListener("click", this.toggleAccordion.bind(this));

        // description
        let descriptionContainer = Utility.createEl('div', this.dynamicSelectors.wrapper,index);
       
        let description = Utility.createEl('p', this.dynamicSelectors.text);
        description.textContent = el.content;

        // append
        descriptionContainer.appendChild(description);
        this.ctx.appendChild(accordionBtn);
        this.ctx.appendChild(descriptionContainer);
        this.parent.appendChild(this.ctx);

    }

    toggleAccordion(e) {

        let button = e.target;
        button.classList.toggle(this.stateClasses.buttonActive)
        let currentAttr = button.getAttribute("data-id")
        let divContent = this.ctx.querySelector(this.selectors.wrapper+`[data-id="${currentAttr}"]`)
        let text = divContent.querySelector(this.selectors.text);

        if (divContent.classList.contains(this.stateClasses.divContentActive)) {
            divContent.style.height = 0;
            divContent.classList.remove(this.stateClasses.divContentActive)
        } else {
            console.log(currentAttr,divContent);
            this.closeAllAcc()
            let textHeight = text.offsetHeight;
            divContent.classList.add(this.stateClasses.divContentActive)
            divContent.style.height = textHeight + "px"
        }
    }

    closeAllAcc() {

        let content = this.ctx.querySelectorAll(this.selectors.wrapper);
        content.forEach(el => {
            el.classList.remove(this.stateClasses.divContentActive)
            el.style.height = 0;
        })
    }
}

function displayAccordion() {
    const accordion = new Accordion(data, ".container");
    accordion.init();
}
displayAccordion()
displayAccordion()


