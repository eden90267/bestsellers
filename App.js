import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import BookItem from "./BookItem";

const mockBooks = [
  {
    rank: 1,
    title: "GATHERING PREY",
    author: "John Sandford",
    book_image: "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780399168796.jpg"
  },
  {
    rank: 2,
    title: "MEMORY MAN",
    author: "David Baldacci",
    book_image: "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9781455586387.jpg"
  }
];

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this._addKeysToBooks(mockBooks)
    };
  }

  _addKeysToBooks = books => {
    return books.map(book => {
      return Object.assign(book, {key: book.title})
    })
  };

  _renderItem = ({item}) => {
    return (
      <BookItem coverURL={item.book_image}
                title={item.key}
                author={item.author}/>
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data} renderItem={this._renderItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  }
});
