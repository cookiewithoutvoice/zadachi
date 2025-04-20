1.
class PrintMaсhine {
        size;
        color;
        font;
        constructor(size = "20px", color = "white", font = "Calibri") {
            this.size = size;
            this.color = color;
            this.font = font;
        }
    print(text) {
        document.write(`<span style="font-size:${this.size}; color:${this.color}; font-family:${this.font};">${text}</span>`);
    }
}
let m = new PrintMaсhine("11px", "blue", "Arial");
m.print("Hallo,");
m.print("<br />");
m.print("world!");

2.
class infoNews {
  constructor (heading, text, arrayTags,date ) {
    this.heading=heading
    this.text=text
    this.arrayTags=arrayTags
    this.date=date

  }
  getDate(){
       let today = new Date(),
       yesterday = today.getDate() -1,
       roomLastMessageDate = new Date(dateTime);
    if (dateTime) {
       if (today == roomLastMessageDate) {
           return 'cегодня'
       }

       else {
           return roomLastMessageDate;
       }
    }
  }
conclusion(){
      document.write(`< style="font-size:20px${this.heading}  font-size:12px${this.getDate} font-size:16px${this.text}  font-size:12px${this.arrayTags}`)
    }
let foo= new infoNews ('сенсация! '', '#lorem #lorem #lorem' )
foo.conclusion(infoNews)

3.
class NewsFeed {
    constructor() {
        this.news = [];
    }

    get count() {
        return this.news.length;
    }

    displayAllNews() {
        if (this.news.length === 0) {
            console.log("новостей не найдено 3:");
            return;
        }
        this.news.forEach((item, index) => {
            console.log(`новость #${index + 1}:`);
            console.log(`заголовок: ${item.title}`);
            console.log(`дата: ${item.date}`);
            console.log(`теги: ${item.tags.join(', ')}`);
            console.log(`содержание: ${item.content}`);
            console.log('------------------------');
        });
    }

    addNews(title, content, tags, date = new Date()) {
        const newsItem = {
            title,
            content,
            tags,
            date: date instanceof Date ? date : new Date(date),
        };
        this.news.push(newsItem);
    }

    deleteNews(index) {
        if (index >= 0 && index < this.news.length) {
            this.news.splice(index, 1);
            return true;
        }
        return false;
    }

    sortNewsByDate() {
        this.news.sort((a, b) => b.date - a.date);
    }
    searchNewsByTag(tag) {
        return this.news.filter(newsItem =>
            newsItem.tags.some(t => t.toLowerCase() === tag.toLowerCase())
        );
    }
}