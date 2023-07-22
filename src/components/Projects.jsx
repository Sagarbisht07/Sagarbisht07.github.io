import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination, Scrollbar, Mousewheel } from "swiper";
import css from "../styles/index.css"

export default function Projects() {
  let Arr = [
    {
      img: "chat.png",
      title: "ChatGPT",
      description: "Openai based chatbot",
      tools: "Javascript | React JS | Chakra UI | Openai | NodeJS | Express",
      span: "5 days",
      typePlan: "ChatGPT",
      github: "https://github.com/Sagarbisht07/ChatGPT",
      deploy:
        "https://www.linkedin.com/posts/sagar-bisht-b26620192_the-chatgpt-server-is-always-full-so-i-created-activity-7032987708239097856-Y758/?utm_source=share&utm_medium=member_desktop",
    },
    {
      img: "fitness.png",
      title: "FITNESS BUDDY",
      description: "Fitness webApp team based project",
      tools: "React Typescript | Tailwind CSS",
      span: "2 days",
      typePlan: "FITNESS BUDDY",
      github: "https://github.com/Sagarbisht07/Wellness-Wizards",
      deploy: "https://n-sagarbisht07.vercel.app/",
    },
    {
      img: "ajio.png",
      title: "Outfitr",
      description: "Online Clothing Store",
      tools: "Javascript | React JS | Chakra UI",
      span: "5 days",
      typePlan: "Ajio",
      github: "https://github.com/Sagarbisht07/shrill-yam-9521",
      deploy: "https://outfiter.vercel.app/",
    },
    {
      img: "code.png",
      title: "Code Editor",
      description: "Online Code Editor",
      tools: "Javascript | React JS ",
      span: "5 days",
      typePlan: "Code Sendbox Clone",
      github: "https://github.com/Sagarbisht07/Code-Editior",
      deploy: "https://precious-blini-afdd2e.netlify.app/",
    },
    {
      img: "apple.png",
      title: "Matrix",
      description: "Apple Clone Team Based Project",
      tools: "Javascript | React JS | Chakra UI | MongoDB | Express | NodeJS ",
      span: "5 days",
      typePlan: "Apple.com",
      github: "https://github.com/Sagarbisht07/Perpetual-fact-6008",
      deploy: "https://matrix-opal.vercel.app/",
    },
    {
      img: "world.png",
      title: "Wardrobe World",
      description: "Online Clothing Store",
      tools: "Javascript | React JS | Chakra UI   ",
      span: "5 days",
      typePlan: "Wardrobe World",
      github: "https://github.com/Sagarbisht07/crabby-whistle-3208",
      deploy: "  https://wardrobe-world.vercel.app/",
    },
  ];

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
        className="mySwiper">
        {Arr.map(
          ({
            img,
            title,
            description,
            tools,
            span,
            typePlan,
            github,
            deploy,
          }) => (
            <SwiperSlide
            className="swiper-slide"
              style={{
                height: "auto",
                width: "100%",
              }}>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "space-Evenly",
                  gap: "1rem",
                  cursor: "pointer",
                }}>
                <div
                 className="Img"
                  style={{
                    width: "30%",
                    textAlign: "center",
                  }}>
                  <img
                    src={img}
                    alt=""
                    width={"100%"}
                    style={{
                      borderRadius: "1rem",
                      marginTop: "3rem",
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "20%",
                  }}>
                  <div
                  className="title"
                
                    style={{
                      display: "flex",
                      gap: ".4rem",
                      marginTop: "2rem",
                      alignItems: "center",
                      fontFamily: "Eudoxus Sans , sans-serif",
                      paddingBottom: ".8rem",
                      cursor: "pointer",
                    }}>
                    <img
                      src="https://icon-library.com/images/link-icon/link-icon-3.jpg"
                      alt=""
                      width={"20%"}
                    />
                    <h3   >{title}</h3>
                  </div>
                  <div
                  className="title"
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                      fontFamily: "Eudoxus Sans , sans-serif",
                      paddingBottom: ".8rem",
                      marginLeft: ".6rem",
                      cursor: "pointer",
                    }}>
                    <img
                      src="https://icon-library.com/images/web-site-icon/web-site-icon-29.jpg"
                      alt=""
                      width={"15%"}
                    />
                    <h3 >{description}</h3>
                  </div>
                  <div
                  className="title"
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                      fontFamily: "Eudoxus Sans , sans-serif",
                      marginLeft: ".6rem",
                      paddingBottom: "1rem",
                      cursor: "pointer",
                    }}>
                    <img
                      src="https://icon-library.com/images/time-machine-icon-png/time-machine-icon-png-7.jpg"
                      alt=""
                      width={"15%"}
                    />
                    <h3>{span}</h3>
                  </div>
                  <div
                  className="title"
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                      fontFamily: "Eudoxus Sans , sans-serif",
                      marginLeft: ".8rem",
                      cursor: "pointer",
                    }}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aSJClfkH9pPoCX6nasySp_e5TAHrjXbrcz0n165yQWSBd6mW&s"
                      alt=""
                      width={"13%"}
                    />
                    <h3>{tools}</h3>
                  </div>
                </div>
                <div
                className="title2"
                  style={{
                    width: "20%",
                    height: "auto",
                    textAlign: "center",
                    marginTop: "8%",
                    cursor: "pointer",
                  }}>
                  <h1
                    style={{
                      fontFamily: "Eudoxus Sans , sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}>
                    {typePlan}
                  </h1>
                </div>
                <div
                className="link"
                  style={{
                    width: "20%",
                    textAlign: "center",
                    marginTop: "5%",
                  }}>
                  <button
                    onClick={() => (window.location.href = github)}
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
                      cursor: "pointer",
                    }}>
                    <img
                      src="https://icon-library.com/images/github-icon-for-resume/github-icon-for-resume-12.jpg"
                      alt=""
                      width={40}
                    />
                    Git Hub
                  </button>
                  <br />
                  <button
                    onClick={() => (window.location.href = deploy)}
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
                      cursor: "pointer",
                    }}>
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
          )
        )}
      </Swiper>
    </>
  );
}
