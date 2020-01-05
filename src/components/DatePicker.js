import React, { Component } from "react";
import moment from "moment";
import { DateRange } from "react-date-range";
import { Button } from "@material-ui/core";

export default class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      rangePicker: {
        startDate: moment(),
        endDate: moment().add(7, "days")
      },
      isShowCalendar: false
    };
  }

  handleChange(which, payload) {
    this.setState({
      [which]: payload
    });
  }

  handleClickOpenCalendar = () => {
    this.setState({
      isShowCalendar: true
    });
  };

  handleClickCloseCalendar = () => {
    this.setState({
      isShowCalendar: false
    });
  };

  render() {
    const { rangePicker, isShowCalendar } = this.state;

    const format = "DD/MMMM/YYYY";
    console.log("rangePicker", rangePicker);

    return (
      <main>
        <h1>React-date-range</h1>
        {isShowCalendar && (
          <div className="box-calendar">
            <div className="close" onClick={this.handleClickCloseCalendar}>
              <Button>Close</Button> 
            </div>
            <DateRange
              format="DD/MM/YYYY"
              startDate={rangePicker["startDate"]}
              endDate={rangePicker["endDate"]}
              linkedCalendars={true}
              disableDaysBeforeToday={true}
              date={now => now}
              onInit={this.handleChange.bind(this, "rangePicker")}
              onChange={this.handleChange.bind(this, "rangePicker")}
              theme={{
                DateRange: {
                  background: "#ffffff"
                },
                Calendar: {
                  background: "transparent",
                  color: "#95a5a6",
                  boxShadow: "0 0 1px #eee",
                  width: "290px",
                  padding: "0px"
                },
                MonthAndYear: {
                  background: "#55B1E3",
                  color: "#fff",
                  padding: "20px 10px",
                  height: "auto"
                },
                MonthButton: {
                  background: "#fff"
                },
                MonthArrowPrev: {
                  borderRightColor: "#55B1E3"
                },
                MonthArrowNext: {
                  borderLeftColor: "#55B1E3"
                },
                Weekday: {
                  background: "#3AA6DF",
                  color: "#fff",
                  padding: "10px",
                  height: "auto",
                  fontWeight: "normal"
                },
                Day: {
                  // borderRadius: "100%",
                  transition:
                    "transform .1s ease, box-shadow .1s ease, background .1s ease"
                },
                DaySelected: {
                  background: "#55B1E3"
                },
                DayActive: {
                  background: "#55B1E3",
                  boxShadow: "none"
                },
                DayInRange: {
                  background: "#eee",
                  color: "#55B1E3"
                },
                DayHover: {
                  background: "#4f4f4f",
                  color: "#fff"
                }
              }}
            />
          </div>
        )}
        <div>
          <input
            type="text"
            readOnly
            onClick={this.handleClickOpenCalendar}
            value={
              rangePicker["startDate"] &&
              rangePicker["startDate"].format(format).toString()
            }
          />
          <input
            type="text"
            readOnly
            onClick={this.handleClickOpenCalendar}
            value={
              rangePicker["endDate"] &&
              rangePicker["endDate"].format(format).toString()
            }
          />
        </div>
      </main>
    );
  }
}
