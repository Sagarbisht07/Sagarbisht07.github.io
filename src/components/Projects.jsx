import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination, Scrollbar, Mousewheel } from "swiper";

export default function Projects() {
  return (
    <>
      <Swiper
        style={{
          height: "75vh",
          width: "100%",
         
        }}
        direction={"vertical"}
        slidesPerView={2}
        scrollbar={true}
        mousewheel={true}
        pagination={{
          clickable: true,
          
        }}
        modules={[Pagination, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            height: "auto",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "space-Evenly",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "30%",
                textAlign: "center",
              }}
            >
              <img src="./showCase1.png" alt="" width={"80%"} />
            </div>
            <div
              style={{
                width: "20%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: ".4rem",
                  marginTop: "2rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  paddingBottom: ".8rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/link-icon/link-icon-3.jpg"
                  alt=""
                  width={"20%"}
                />
                <h3>Clone of avis.com</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  paddingBottom: ".8rem",
                  marginLeft: ".6rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/web-site-icon/web-site-icon-29.jpg"
                  alt=""
                  width={"15%"}
                />
                <h3>Booking site</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  marginLeft: ".6rem",
                  paddingBottom: "1rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/time-machine-icon-png/time-machine-icon-png-7.jpg"
                  alt=""
                  width={"15%"}
                />
                <h3>3 Days</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  marginLeft: ".8rem",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aSJClfkH9pPoCX6nasySp_e5TAHrjXbrcz0n165yQWSBd6mW&s"
                  alt=""
                  width={"13%"}
                />
                <h3>React</h3>
              </div>
            </div>
            <div
              style={{
                width: "20%",
                height: "auto",
                textAlign: "center",
                marginTop: "8%",
              }}
            >
              <h1
                style={{
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Rentovento
              </h1>
            </div>
            <div
              style={{
                width: "20%",
                textAlign: "center",
                marginTop: "5%",
              }}
            >
              <button
                style={{
                  display: "flex",
                  gap: ".2rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  padding: ".3rem",
                  backgroundColor: "rgb(248, 247, 241)",
                  margin: "auto",
                  boxShadow: "0 0 5px 0px rgb(0 0 0 / 20%)",
                }}
              >
                <img
                  src="https://icon-library.com/images/github-icon-for-resume/github-icon-for-resume-12.jpg"
                  alt=""
                  width={40}
                />
                Git Hub
              </button>
              <br />
              <button
                style={{
                  display: "flex",
                  gap: ".4rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  padding: ".3rem",
                  backgroundColor: "rgb(248, 247, 241)",
                  margin: "auto",
                  boxShadow: "",
                }}
              >
                <img
                  src="https://icon-library.com/images/hosting-icon-png/hosting-icon-png-28.jpg"
                  alt=""
                  width={40}
                />
                Live
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "auto",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "space-Evenly",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "30%",
                textAlign: "center",
              }}
            >
              <img src="./showCase1.png" alt="" width={"80%"} />
            </div>
            <div
              style={{
                width: "20%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: ".4rem",
                  marginTop: "2rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  paddingBottom: ".8rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/link-icon/link-icon-3.jpg"
                  alt=""
                  width={"20%"}
                />
                <h3>Clone of avis.com</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  paddingBottom: ".8rem",
                  marginLeft: ".6rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/web-site-icon/web-site-icon-29.jpg"
                  alt=""
                  width={"15%"}
                />
                <h3>Booking site</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  marginLeft: ".6rem",
                  paddingBottom: "1rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/time-machine-icon-png/time-machine-icon-png-7.jpg"
                  alt=""
                  width={"15%"}
                />
                <h3>3 Days</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  marginLeft: ".8rem",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aSJClfkH9pPoCX6nasySp_e5TAHrjXbrcz0n165yQWSBd6mW&s"
                  alt=""
                  width={"13%"}
                />
                <h3>React</h3>
              </div>
            </div>
            <div
              style={{
                width: "20%",
                height: "auto",
                textAlign: "center",
                marginTop: "8%",
              }}
            >
              <h1
                style={{
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Rentovento
              </h1>
            </div>
            <div
              style={{
                width: "20%",
                textAlign: "center",
                marginTop: "5%",
              }}
            >
              <button
                style={{
                  display: "flex",
                  gap: ".2rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  padding: ".3rem",
                  backgroundColor: "rgb(248, 247, 241)",
                  margin: "auto",
                  boxShadow: "0 0 5px 0px rgb(0 0 0 / 20%)",
                }}
              >
                <img
                  src="https://icon-library.com/images/github-icon-for-resume/github-icon-for-resume-12.jpg"
                  alt=""
                  width={40}
                />
                Git Hub
              </button>
              <br />
              <button
                style={{
                  display: "flex",
                  gap: ".4rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  padding: ".3rem",
                  backgroundColor: "rgb(248, 247, 241)",
                  margin: "auto",
                  boxShadow: "",
                }}
              >
                <img
                  src="https://icon-library.com/images/hosting-icon-png/hosting-icon-png-28.jpg"
                  alt=""
                  width={40}
                />
                Live
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "auto",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "space-Evenly",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "30%",
                textAlign: "center",
              }}
            >
              <img src="./showCase1.png" alt="" width={"80%"} />
            </div>
            <div
              style={{
                width: "20%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: ".4rem",
                  marginTop: "2rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  paddingBottom: ".8rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/link-icon/link-icon-3.jpg"
                  alt=""
                  width={"20%"}
                />
                <h3>Clone of avis.com</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  paddingBottom: ".8rem",
                  marginLeft: ".6rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/web-site-icon/web-site-icon-29.jpg"
                  alt=""
                  width={"15%"}
                />
                <h3>Booking site</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  marginLeft: ".6rem",
                  paddingBottom: "1rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/time-machine-icon-png/time-machine-icon-png-7.jpg"
                  alt=""
                  width={"15%"}
                />
                <h3>3 Days</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  marginLeft: ".8rem",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aSJClfkH9pPoCX6nasySp_e5TAHrjXbrcz0n165yQWSBd6mW&s"
                  alt=""
                  width={"13%"}
                />
                <h3>React</h3>
              </div>
            </div>
            <div
              style={{
                width: "20%",
                height: "auto",
                textAlign: "center",
                marginTop: "8%",
              }}
            >
              <h1
                style={{
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Rentovento
              </h1>
            </div>
            <div
              style={{
                width: "20%",
                textAlign: "center",
                marginTop: "5%",
              }}
            >
              <button
                style={{
                  display: "flex",
                  gap: ".2rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  padding: ".3rem",
                  backgroundColor: "rgb(248, 247, 241)",
                  margin: "auto",
                  boxShadow: "0 0 5px 0px rgb(0 0 0 / 20%)",
                }}
              >
                <img
                  src="https://icon-library.com/images/github-icon-for-resume/github-icon-for-resume-12.jpg"
                  alt=""
                  width={40}
                />
                Git Hub
              </button>
              <br />
              <button
                style={{
                  display: "flex",
                  gap: ".4rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  padding: ".3rem",
                  backgroundColor: "rgb(248, 247, 241)",
                  margin: "auto",
                  boxShadow: "",
                }}
              >
                <img
                  src="https://icon-library.com/images/hosting-icon-png/hosting-icon-png-28.jpg"
                  alt=""
                  width={40}
                />
                Live
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "auto",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "space-Evenly",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "30%",
                textAlign: "center",
              }}
            >
              <img src="./showCase1.png" alt="" width={"80%"} />
            </div>
            <div
              style={{
                width: "20%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: ".4rem",
                  marginTop: "2rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  paddingBottom: ".8rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/link-icon/link-icon-3.jpg"
                  alt=""
                  width={"20%"}
                />
                <h3>Clone of avis.com</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  paddingBottom: ".8rem",
                  marginLeft: ".6rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/web-site-icon/web-site-icon-29.jpg"
                  alt=""
                  width={"15%"}
                />
                <h3>Booking site</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  marginLeft: ".6rem",
                  paddingBottom: "1rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/time-machine-icon-png/time-machine-icon-png-7.jpg"
                  alt=""
                  width={"15%"}
                />
                <h3>3 Days</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  marginLeft: ".8rem",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aSJClfkH9pPoCX6nasySp_e5TAHrjXbrcz0n165yQWSBd6mW&s"
                  alt=""
                  width={"13%"}
                />
                <h3>React</h3>
              </div>
            </div>
            <div
              style={{
                width: "20%",
                height: "auto",
                textAlign: "center",
                marginTop: "8%",
              }}
            >
              <h1
                style={{
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Rentovento
              </h1>
            </div>
            <div
              style={{
                width: "20%",
                textAlign: "center",
                marginTop: "5%",
              }}
            >
              <button
                style={{
                  display: "flex",
                  gap: ".2rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  padding: ".3rem",
                  backgroundColor: "rgb(248, 247, 241)",
                  margin: "auto",
                  boxShadow: "0 0 5px 0px rgb(0 0 0 / 20%)",
                }}
              >
                <img
                  src="https://icon-library.com/images/github-icon-for-resume/github-icon-for-resume-12.jpg"
                  alt=""
                  width={40}
                />
                Git Hub
              </button>
              <br />
              <button
                style={{
                  display: "flex",
                  gap: ".4rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  padding: ".3rem",
                  backgroundColor: "rgb(248, 247, 241)",
                  margin: "auto",
                  boxShadow: "",
                }}
              >
                <img
                  src="https://icon-library.com/images/hosting-icon-png/hosting-icon-png-28.jpg"
                  alt=""
                  width={40}
                />
                Live
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "auto",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "space-Evenly",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "30%",
                textAlign: "center",
              }}
            >
              <img src="./showCase1.png" alt="" width={"80%"} />
            </div>
            <div
              style={{
                width: "20%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: ".4rem",
                  marginTop: "2rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  paddingBottom: ".8rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/link-icon/link-icon-3.jpg"
                  alt=""
                  width={"20%"}
                />
                <h3>Clone of avis.com</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  paddingBottom: ".8rem",
                  marginLeft: ".6rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/web-site-icon/web-site-icon-29.jpg"
                  alt=""
                  width={"15%"}
                />
                <h3>Booking site</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  marginLeft: ".6rem",
                  paddingBottom: "1rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/time-machine-icon-png/time-machine-icon-png-7.jpg"
                  alt=""
                  width={"15%"}
                />
                <h3>3 Days</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  marginLeft: ".8rem",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aSJClfkH9pPoCX6nasySp_e5TAHrjXbrcz0n165yQWSBd6mW&s"
                  alt=""
                  width={"13%"}
                />
                <h3>React</h3>
              </div>
            </div>
            <div
              style={{
                width: "20%",
                height: "auto",
                textAlign: "center",
                marginTop: "8%",
              }}
            >
              <h1
                style={{
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Rentovento
              </h1>
            </div>
            <div
              style={{
                width: "20%",
                textAlign: "center",
                marginTop: "5%",
              }}
            >
              <button
                style={{
                  display: "flex",
                  gap: ".2rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  padding: ".3rem",
                  backgroundColor: "rgb(248, 247, 241)",
                  margin: "auto",
                  boxShadow: "0 0 5px 0px rgb(0 0 0 / 20%)",
                }}
              >
                <img
                  src="https://icon-library.com/images/github-icon-for-resume/github-icon-for-resume-12.jpg"
                  alt=""
                  width={40}
                />
                Git Hub
              </button>
              <br />
              <button
                style={{
                  display: "flex",
                  gap: ".4rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  padding: ".3rem",
                  backgroundColor: "rgb(248, 247, 241)",
                  margin: "auto",
                  boxShadow: "",
                }}
              >
                <img
                  src="https://icon-library.com/images/hosting-icon-png/hosting-icon-png-28.jpg"
                  alt=""
                  width={40}
                />
                Live
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "auto",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "space-Evenly",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "30%",
                textAlign: "center",
              }}
            >
              <img src="./showCase1.png" alt="" width={"80%"} />
            </div>
            <div
              style={{
                width: "20%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: ".4rem",
                  marginTop: "2rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  paddingBottom: ".8rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/link-icon/link-icon-3.jpg"
                  alt=""
                  width={"20%"}
                />
                <h3>Clone of avis.com</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  paddingBottom: ".8rem",
                  marginLeft: ".6rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/web-site-icon/web-site-icon-29.jpg"
                  alt=""
                  width={"15%"}
                />
                <h3>Booking site</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  marginLeft: ".6rem",
                  paddingBottom: "1rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/time-machine-icon-png/time-machine-icon-png-7.jpg"
                  alt=""
                  width={"15%"}
                />
                <h3>3 Days</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  marginLeft: ".8rem",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aSJClfkH9pPoCX6nasySp_e5TAHrjXbrcz0n165yQWSBd6mW&s"
                  alt=""
                  width={"13%"}
                />
                <h3>React</h3>
              </div>
            </div>
            <div
              style={{
                width: "20%",
                height: "auto",
                textAlign: "center",
                marginTop: "8%",
              }}
            >
              <h1
                style={{
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Rentovento
              </h1>
            </div>
            <div
              style={{
                width: "20%",
                textAlign: "center",
                marginTop: "5%",
              }}
            >
              <button
                style={{
                  display: "flex",
                  gap: ".2rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  padding: ".3rem",
                  backgroundColor: "rgb(248, 247, 241)",
                  margin: "auto",
                  boxShadow: "0 0 5px 0px rgb(0 0 0 / 20%)",
                }}
              >
                <img
                  src="https://icon-library.com/images/github-icon-for-resume/github-icon-for-resume-12.jpg"
                  alt=""
                  width={40}
                />
                Git Hub
              </button>
              <br />
              <button
                style={{
                  display: "flex",
                  gap: ".4rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  padding: ".3rem",
                  backgroundColor: "rgb(248, 247, 241)",
                  margin: "auto",
                  boxShadow: "",
                }}
              >
                <img
                  src="https://icon-library.com/images/hosting-icon-png/hosting-icon-png-28.jpg"
                  alt=""
                  width={40}
                />
                Live
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "auto",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "space-Evenly",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "30%",
                textAlign: "center",
              }}
            >
              <img src="./showCase1.png" alt="" width={"80%"} />
            </div>
            <div
              style={{
                width: "20%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: ".4rem",
                  marginTop: "2rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  paddingBottom: ".8rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/link-icon/link-icon-3.jpg"
                  alt=""
                  width={"20%"}
                />
                <h3>Clone of avis.com</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  paddingBottom: ".8rem",
                  marginLeft: ".6rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/web-site-icon/web-site-icon-29.jpg"
                  alt=""
                  width={"15%"}
                />
                <h3>Booking site</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  marginLeft: ".6rem",
                  paddingBottom: "1rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/time-machine-icon-png/time-machine-icon-png-7.jpg"
                  alt=""
                  width={"15%"}
                />
                <h3>3 Days</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  marginLeft: ".8rem",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aSJClfkH9pPoCX6nasySp_e5TAHrjXbrcz0n165yQWSBd6mW&s"
                  alt=""
                  width={"13%"}
                />
                <h3>React</h3>
              </div>
            </div>
            <div
              style={{
                width: "20%",
                height: "auto",
                textAlign: "center",
                marginTop: "8%",
              }}
            >
              <h1
                style={{
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Rentovento
              </h1>
            </div>
            <div
              style={{
                width: "20%",
                textAlign: "center",
                marginTop: "5%",
              }}
            >
              <button
                style={{
                  display: "flex",
                  gap: ".2rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  padding: ".3rem",
                  backgroundColor: "rgb(248, 247, 241)",
                  margin: "auto",
                  boxShadow: "0 0 5px 0px rgb(0 0 0 / 20%)",
                }}
              >
                <img
                  src="https://icon-library.com/images/github-icon-for-resume/github-icon-for-resume-12.jpg"
                  alt=""
                  width={40}
                />
                Git Hub
              </button>
              <br />
              <button
                style={{
                  display: "flex",
                  gap: ".4rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  padding: ".3rem",
                  backgroundColor: "rgb(248, 247, 241)",
                  margin: "auto",
                  boxShadow: "",
                }}
              >
                <img
                  src="https://icon-library.com/images/hosting-icon-png/hosting-icon-png-28.jpg"
                  alt=""
                  width={40}
                />
                Live
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "auto",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "space-Evenly",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "30%",
                textAlign: "center",
              }}
            >
              <img src="./showCase1.png" alt="" width={"80%"} />
            </div>
            <div
              style={{
                width: "20%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: ".4rem",
                  marginTop: "2rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  paddingBottom: ".8rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/link-icon/link-icon-3.jpg"
                  alt=""
                  width={"20%"}
                />
                <h3>Clone of avis.com</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  paddingBottom: ".8rem",
                  marginLeft: ".6rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/web-site-icon/web-site-icon-29.jpg"
                  alt=""
                  width={"15%"}
                />
                <h3>Booking site</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  marginLeft: ".6rem",
                  paddingBottom: "1rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/time-machine-icon-png/time-machine-icon-png-7.jpg"
                  alt=""
                  width={"15%"}
                />
                <h3>3 Days</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  marginLeft: ".8rem",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aSJClfkH9pPoCX6nasySp_e5TAHrjXbrcz0n165yQWSBd6mW&s"
                  alt=""
                  width={"13%"}
                />
                <h3>React</h3>
              </div>
            </div>
            <div
              style={{
                width: "20%",
                height: "auto",
                textAlign: "center",
                marginTop: "8%",
              }}
            >
              <h1
                style={{
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Rentovento
              </h1>
            </div>
            <div
              style={{
                width: "20%",
                textAlign: "center",
                marginTop: "5%",
              }}
            >
              <button
                style={{
                  display: "flex",
                  gap: ".2rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  padding: ".3rem",
                  backgroundColor: "rgb(248, 247, 241)",
                  margin: "auto",
                  boxShadow: "0 0 5px 0px rgb(0 0 0 / 20%)",
                }}
              >
                <img
                  src="https://icon-library.com/images/github-icon-for-resume/github-icon-for-resume-12.jpg"
                  alt=""
                  width={40}
                />
                Git Hub
              </button>
              <br />
              <button
                style={{
                  display: "flex",
                  gap: ".4rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  padding: ".3rem",
                  backgroundColor: "rgb(248, 247, 241)",
                  margin: "auto",
                  boxShadow: "",
                }}
              >
                <img
                  src="https://icon-library.com/images/hosting-icon-png/hosting-icon-png-28.jpg"
                  alt=""
                  width={40}
                />
                Live
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "auto",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "space-Evenly",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "30%",
                textAlign: "center",
              }}
            >
              <img src="./showCase1.png" alt="" width={"80%"} />
            </div>
            <div
              style={{
                width: "20%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: ".4rem",
                  marginTop: "2rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  paddingBottom: ".8rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/link-icon/link-icon-3.jpg"
                  alt=""
                  width={"20%"}
                />
                <h3>Clone of avis.com</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  paddingBottom: ".8rem",
                  marginLeft: ".6rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/web-site-icon/web-site-icon-29.jpg"
                  alt=""
                  width={"15%"}
                />
                <h3>Booking site</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  marginLeft: ".6rem",
                  paddingBottom: "1rem",
                }}
              >
                <img
                  src="https://icon-library.com/images/time-machine-icon-png/time-machine-icon-png-7.jpg"
                  alt=""
                  width={"15%"}
                />
                <h3>3 Days</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  marginLeft: ".8rem",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aSJClfkH9pPoCX6nasySp_e5TAHrjXbrcz0n165yQWSBd6mW&s"
                  alt=""
                  width={"13%"}
                />
                <h3>React</h3>
              </div>
            </div>
            <div
              style={{
                width: "20%",
                height: "auto",
                textAlign: "center",
                marginTop: "8%",
              }}
            >
              <h1
                style={{
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Rentovento
              </h1>
            </div>
            <div
              style={{
                width: "20%",
                textAlign: "center",
                marginTop: "5%",
              }}
            >
              <button
                style={{
                  display: "flex",
                  gap: ".2rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  padding: ".3rem",
                  backgroundColor: "rgb(248, 247, 241)",
                  margin: "auto",
                  boxShadow: "0 0 5px 0px rgb(0 0 0 / 20%)",
                }}
              >
                <img
                  src="https://icon-library.com/images/github-icon-for-resume/github-icon-for-resume-12.jpg"
                  alt=""
                  width={40}
                />
                Git Hub
              </button>
              <br />
              <button
                style={{
                  display: "flex",
                  gap: ".4rem",
                  alignItems: "center",
                  fontFamily: "Eudoxus Sans , sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  padding: ".3rem",
                  backgroundColor: "rgb(248, 247, 241)",
                  margin: "auto",
                  boxShadow: "",
                }}
              >
                <img
                  src="https://icon-library.com/images/hosting-icon-png/hosting-icon-png-28.jpg"
                  alt=""
                  width={40}
                />
                Live
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
