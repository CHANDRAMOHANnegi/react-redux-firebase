import React from 'react';
import {
  Container, Divider, List, ListItem,
  Input, Typography, Box, Grid, Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../assets/logo.png'
import Filter from './Filters'
class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "",
      filter: {
        search: "All",
        by: "Popularity",
        for: "All Time"
      }
    }
  }

  searcheMap = {
    "all": "All",
    "stories": "Stories",
    "comments": "comments"
  }
  byMap = {
    "popularity": "Popularity",
    "date": 'Date',
  }
  forMap = {
    "all": 'All Time',
    "last24h": "last 24 hour",
    "pastWeek": "Past week",
    "pastMonth": "Past month",
    "pastYear": "Past year",
    "custom": "Custom range",
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      this.handleSearch())
  }

  handleSearch = () => {
    const { query } = this.state;
    if (query)
      this.props.search("", query)
  }

  setFilter = () => {

  }

  Header = () => {
    return (
      <div className="header">
        <Grid container >
          <Grid item xs={2}>
            <div className="logo">
              <div>  <img style={{ width: "50px" }} src={logo} alt="logo" /></div>
              <div className="logo-text"> Search<br /> Hacker News</div>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className="search">
              <div ><SearchIcon onClick={this.handleSearch} /></div>
              <Input disableUnderline autoFocus name="query"
                onChange={this.handleChange}
                placeholder="Search stories by title, url or author" />
              <div>search by
           <a href="https://www.algolia.com/?utm_source=hn_search&amp;amp;utm_medium=link&amp;amp;utm_term=logo&amp;amp;utm_campaign=hn_algolia"
                  title="Realtime Search Engine"
                  target="_blank">
                  <img style={{ height: "16px" }} src="//d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-algolia-blue-35c461b6.svg" alt="Algolia Logo" />
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div className="setting">
              <div > <SettingsIcon style={{ fontSize: 35 }} /></div>
              <div> Setting</div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  };



  render() {
    const { searchData } = this.props;
    return (
      <Container maxWidth="lg" className="dashboard-container">
        <this.Header />
        <div className="filter">
          <div> search<Filter setFilter={this.setFilter} filterMap={this.searcheMap} /></div>
          <div>    by <Filter setFilter={this.setFilter} filterMap={this.byMap} /></div>
          <div>   for <Filter setFilter={this.setFilter} filterMap={this.forMap} /></div>
        </div>
        <Divider />

        {/* <Box>
          <h3 onClick={() => this.props.history.push('/profile')}>Welcome!</h3>
        </Box> */}
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', }} >
          <div className="main">
            <List>
              {searchData && searchData.hits.map((result, i) =>
                <div key={i} className="list">
                  <div >
                    <span> {result.title}</span>
                    <span><a href={result.url}>({result.url})</a></span>
                  </div>
                  <div>
                    <span> {result.points} points</span>
                    <span> | </span>
                    <span> {result.author} author</span>
                    <span> | </span>
                    <span> {new Date().getFullYear() - new Date(result.created_at).getFullYear()} Year ago</span>
                    <span> | </span>
                    <span> {result.num_comments} comments</span>
                  </div>
                </div>)}
            </List>
          </div>
        </Typography>
      </Container>
    )
  }
}
export default Dashboard;