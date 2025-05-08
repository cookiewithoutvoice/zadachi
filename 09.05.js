1.
const trackbars = document.querySelectorAll(".trackbar");
for (let i = 0; i < trackbars.length; i++) {
  let trackbar = trackbars[i];

  const button = trackbar.querySelector(".track-button");
  if (button && button instanceof HTMLElement) {
    let dragging = false;

    const parentWidth = trackbar.offsetWidth;
    const elementWidth = button.offsetWidth;

    let clickOffset = 0;
    button.addEventListener("mousedown", () => {
      clickOffset = event.pageX - button.offsetLeft - 8 - elementWidth / 2;
      dragging = true;
    });
    document.body.addEventListener("mouseup", () => {
      dragging = false;
    });
    document.body.addEventListener("mousemove", (event) => {
      if (dragging) {
        let currentPosition =
          event.pageX - button.offsetLeft - 8 - elementWidth / 2;
        let elementPosition = parseInt(
          window.getComputedStyle(button).getPropertyValue("left")
        );

        let nextPosition = elementPosition + currentPosition - clickOffset;

        if (nextPosition < 0) nextPosition = 0;
        if (nextPosition >= parentWidth - elementWidth)
          nextPosition = parentWidth - elementWidth;

        if (elementPosition == nextPosition + 2) return false;
        nextPosition = nextPosition + "px";

        button.style.left = nextPosition;
        let color =
          "hsl(" +
          (
            120 -
            (100 -
              Math.floor(
                (elementPosition * 100) / (parentWidth - elementWidth)
              )) *
              1.2
          ).toString(10) +
          ",70%,60%)";

        button.style.setProperty("--next-bg-color", color);

        trackbar.setAttribute(
          "complete",
          Math.floor((elementPosition * 100) / (parentWidth - elementWidth))
        );
        if ((trackSelector = trackbar.querySelector(".track-selector")))
          trackSelector.style.width =
            Math.floor(
              (elementPosition * parentWidth) / (parentWidth - elementWidth)
            ) + "px";

        if ((trackPercentage = trackbar.querySelector(".track-percentage")))
          trackPercentage.innerHTML =
            Math.floor((elementPosition * 100) / (parentWidth - elementWidth)) +
            "%";
      }
    });
    document.body.addEventListener("mouseleave", () => {
      dragging = false;
    });
  }
}

2.
let images = ["img/html.png", "img/css.png", "img/js.png"];

let imageElement = document.getElementById("image");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");
let currentIndex = 0;

function updateGallery() {
  imageElement.src = images[currentIndex];

  if (currentIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (currentIndex === images.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

prevButton.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
  }
});

nextButton.addEventListener("click", function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateGallery();
  }
});

updateGallery();

3.
function toggleBlock(index) {
  blocks.forEach(function (block, i) {
    if (i === index) {
      block.classList.add("active");
    } else {
      block.classList.remove("active");
    }
  });
}

4.
let newsContainer = document.getElementById("newsContainer");
let loader = document.getElementById("loader");
let oneIndex = 0;

function loadMoreNews() {
  loader.style.display = "block";

  setTimeout(function () {
    for (let i = 0; i < 1; i++) {
      if (oneIndex < news.length) {
        let newsElement = document.createElement("div");
        newsElement.className = "news";
        newsElement.textContent = news[oneIndex];
        newsContainer.appendChild(newsElement);
        oneIndex++;
      }
    }
    loader.style.display = "none";
  }, 3000);
  let news = [
    `срочная новость! Вы стали котиком! на сегодня новости закончились, спасибо за внимание!`,
  ];
}

window.addEventListener("scroll", function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMoreNews();
  }
});

loadMoreNews();

5.
import React from "react";

export default class Grid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let d = new Date(this.props.year, this.props.month - 1);
        const firstDayOfMonth = d.getDay();
        const nextMonth = new Date(this.props.year, this.props.month);
        const daysInMonth = (nextMonth - d) / 1000 / 60 / 60 / 24;
        const weeksInMonth = Math.ceil((firstDayOfMonth + daysInMonth) / 7);
        let layout = [];
        for (let i = 0; i < weeksInMonth; i++) {
            layout.push([])
            for (let j = 0; j < 7; j++) {
                let day = 1 + (j + i * 7) - firstDayOfMonth;
                let content = "";
                if (day > 0 && day <= daysInMonth) {
                    content = day;
                }
                layout[i][j] = (<td key={j + i * 7}>{content}</td>)
            }
        }
        layout = layout.map((week, i) => <tr key={i}>{week}</tr>)


        return (
            <div className="calendar-grid">
                <h6>{this.props.month}, {this.props.year}</h6>
                <table className="table">
                    <thead>
                        <tr>
                            <th>вс</th>
                            <th>пн.</th>
                            <th>Вт.</th>
                            <th>Ср.</th>
                            <th>Чт.</th>
                            <th>Пт.</th>
                            <th>Сб.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {layout}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            month: null,
            year: null
        }
    }

    handleMonthInput(value) {
        this.month = value;
    }

    handleYearInput(value) {
        this.year = value;
    }

    generateGrid() {
        const {month, year} = this;
        if (this.validateMonth(month) && this.validateYear(year)) {
            this.setState({month, year});
        } else {
            alert("проверьте введённые данные");
        }
    }

    validateMonth(month) {
        month = parseInt(month);
        return month <= 12 && month > 0;
    }

    validateYear(year) {
        year =  parseInt(year);
        return !isNaN(year);
    }

    render() {
        const {month, year} = this.state;
        return (
            <div className="calendar border rounded mt-3 p-3">
                <div className="row mb-3">
                    <div className="col-6 form-floating">
                        <input onChange={e => this.handleMonthInput(e.target.value)} className="form-control" id="month" placeholder=""></input>
                        <label htmlFor="month">Month:</label>
                    </div>
                    <div className="col-6 form-floating">
                        <input onChange={e => this.handleYearInput(e.target.value)} className="form-control" id="year" placeholder=""></input>
                        <label htmlFor="year">Year:</label>
                    </div>
                </div>
                <div className="d-grid">
                    <button onClick={() => this.generateGrid()} className="btn btn-success" type="button">Generate</button>
                </div>
                <Grid month={month} year={year} />
            </div>
        );
    }
}