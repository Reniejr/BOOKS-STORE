//MAIN
import React, { PureComponent } from "react";
//UTILITIES
import { fetchGet } from "../../../Utilities/Fetch/Fetch";
import { chunkArray } from "../../../Utilities/General/General";
import {
  categoryPageScroll,
  navScroll,
} from "../../../Utilities/OnScroll/OnScroll";
//STYLE
import "./CategoryPage.scss";
import "../../../Style/_Animations.scss";
import "../../../Style/_Themes.scss";
//BOTSTRAP
import { Row, Col } from "react-bootstrap";
//COMPONENTS
import Book from "../../_GENERAL_SUB_COMPONENTS/Book/Book";
import DetailsComments from "../../CategoryPage_SubComponents/Details_Comments/DetailsComments";
import JumboCategory from "../../CategoryPage_SubComponents/JumboCategory/JumboCategory";

export default class CategoryPage extends PureComponent {
  state = {
    booksList: [],
    chunkContainer: [],
    selected: {},
    page: [],
    selectedBook: {
      title: "No Book Selected",
      img: "./assets/images/bg.jpg",
      asin: "",
      price: "",
    },
    impaginationNumb: 1,
  };

  getChunkData = async () => {
    let result = await fetchGet(
      process.env.REACT_APP_URL_OFFLINE,
      "books",
      null,
      "category",
      this.props.match.params.category
    );
    console.log(result);
    this.setState({ booksList: result });
    return result;
  };

  selectPage = (index) => {
    this.setState({
      page: this.state.chunkContainer[index],
      impaginationNumb: index + 1,
    });
  };

  selectBooks = (book) => {
    let thisBook = { ...book },
      selectedBook = { ...this.state.selectedBook },
      emptyBook = {
        title: "No Book Selected",
        img: "./assets/images/bg.jpg",
        asin: "",
        price: "",
      };
    selectedBook.asin === thisBook.asin
      ? this.setState({ selectedBook: emptyBook })
      : this.setState({ selectedBook: thisBook });
  };

  componentDidMount = async () => {
    let result = await this.getChunkData(),
      chunkContainer = await chunkArray(result, 10);
    this.setState({ chunkContainer: chunkContainer, page: chunkContainer[0] });
    window.onscroll = () => {
      categoryPageScroll();
    };
  };

  render() {
    // console.log(this.props)
    const style =
      this.props.match.params.category === "fantasy" ||
      this.props.match.params.category === "history"
        ? "whitesmoke"
        : "";
    return (
      <div id="category-page" className={this.props.match.params.category}>
        <JumboCategory />
        <Row>
          <Col
            xs={12}
            sm={8}
            className="books-impagination"
            style={{
              backgroundColor: style,
            }}
          >
            <div className="impagination">
              {this.state.chunkContainer.map((chunk, index) => {
                return (
                  <button
                    onClick={() => this.selectPage(index)}
                    className={
                      this.state.impaginationNumb === index + 1
                        ? "button-active"
                        : ""
                    }
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            <div className="page">
              {this.state.page.map((book) => {
                return (
                  <>
                    <h6>{book.title}</h6>
                    <Book
                      cover={book.img}
                      key={book.asin}
                      click={() => this.selectBooks(book)}
                    />
                    <div
                      className="plot"
                      style={{
                        display:
                          this.state.selectedBook.asin === book.asin
                            ? "block"
                            : "none",
                      }}
                    >
                      <p style={{ fontWeight: "bold" }}>Plot:</p>
                      <p className="plot-description">{book.description}</p>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="impagination">
              {this.state.chunkContainer.map((chunk, index) => {
                return (
                  <button
                    onClick={() => this.selectPage(index)}
                    className={
                      this.state.impaginationNumb === index + 1
                        ? "button-active"
                        : ""
                    }
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </Col>
          <Col
            xs={12}
            sm={4}
            className="books-details-comments"
            style={{
              backgroundColor: style,
            }}
          >
            {this.state.selected.asin ? (
              <div>No Selected</div>
            ) : (
              <DetailsComments selected={this.state.selectedBook} />
            )}
          </Col>
        </Row>
      </div>
    );
  }
}
