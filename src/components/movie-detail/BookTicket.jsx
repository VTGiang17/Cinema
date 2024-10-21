import React, { useEffect, useMemo, useState } from "react";
import { seats } from "../../assets/mockData";
import classNames from "classnames";
export const BookTicket = ({ movieData, onClickOut }) => {
  const [seatList, setSeatList] = useState([]);
  const [total, setTotal] = useState(0);
  const onClickSeat = (seatInfo) => {
    if (!chosenSeats.includes(seatInfo)) {
      setSeatList((prevSetSeatList) => {
        if (!prevSetSeatList.includes(seatInfo)) {
          return [...prevSetSeatList, seatInfo];
        } else {
          return prevSetSeatList.filter((seat) => seat !== seatInfo);
        }
      });
    }
  };

  const totalTicket = () => {
    const flatSeat = seats.flat();
    return seatList.reduce((total, seat) => {
      const foundSelectedSeat = flatSeat.find(
        (item) => item.seatValue === seat
      );
      if (foundSelectedSeat) {
        return total + foundSelectedSeat.seatTotal;
      } else {
        return total;
      }
    }, 0);
  };

  const chosenSeats = useMemo(() => {
    if (JSON.parse(localStorage.getItem("seatsChosen"))) {
      return JSON.parse(localStorage.getItem("seatsChosen"));
    } else {
      return [];
    }
  }, []);

  console.log("🚀 ~ chosenSeats ~ chosenSeats:", chosenSeats);

  const checkChosenSeat = (seat, chosenSeats) => {
    return chosenSeats.includes(seat.seatValue);
  };
  const onClickSaveChosenSeats = () => {
    const allArr = [...new Set([...chosenSeats, ...seatList])];
    localStorage.setItem("seatsChosen", JSON.stringify(allArr));
    window.location.reload();
  };

  return (
    <>
      <div className="book-ticket-wrapper">
        <div className="book-ticket-content">
          <div className="tab-back">
            <i
              onClick={onClickOut}
              class="fa-solid fa-arrow-left-long fa-xl"
            ></i>
          </div>
          <div className="book-ticket-form">
            <div className="book-ticket-seats">
              <div className="screen-div">
                <div className="screen"></div>
                <span>(Màn hình)</span>
              </div>
              <div className="book-ticket-seats-wrapper">
                {seats.map((row, indexRow) => {
                  return (
                    <div key={`row: ${indexRow}`} className="seat-col">
                      {row.map((number, indexNumber) => {
                        return (
                          <div
                            onClick={() =>
                              onClickSeat(`${number.row}${number.seatNumber}`)
                            }
                            key={`number: ${indexNumber}`}
                            className={classNames("seat-block", {
                              isSelected: seatList.includes(number.seatValue),
                              isChosen: checkChosenSeat(number, chosenSeats),
                            })}
                          >
                            {`${number.row}${number.seatNumber}`}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="book-ticket-total">
              <div className="seat-review">
                <div className="seat-color">
                  <div className="seat-color-block isBooked-color"></div>
                  <span className="seat-color-type">Đã đặt</span>
                </div>
                <div className="seat-color">
                  <div className="seat-color-block isSelected-color"></div>
                  <span className="seat-color-type">Đang chọn</span>
                </div>
                <div className="seat-color">
                  <div className="seat-color-block"></div>
                  <span className="seat-color-type">Chưa đặt</span>
                </div>
              </div>
              <div className="movie-detail-info">
                <img src={movieData.thumbImageURL} alt="movie-avt" />
                <h4 className="movie-name">{movieData.movieTitle}</h4>
              </div>
              <h5>Ghế bạn đã chọn: </h5>
              <div className="your-seat-choose">
                {seatList.map((seat, index) => {
                  return (
                    <div key={index} className="seat-block-isSelected">
                      {seat}
                    </div>
                  );
                })}
              </div>
              <div className="total">
                <h4>Tổng tiền: </h4>
                <h4 className="full-total">{totalTicket()} VND</h4>
              </div>
              <div className="spacer"></div>
              <div className="total-btn">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onClickSaveChosenSeats();
                  }}
                  class="button-17"
                  role="button"
                >
                  Đặt vé
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
