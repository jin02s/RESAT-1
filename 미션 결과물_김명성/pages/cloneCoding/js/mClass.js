const mClassBox = document.querySelector(".mClassBox");

const getMClassList = async () => {
  const data = [
    {
      id: 1,
      category: "실무",
      title: "[직무역량강화] 글쓰는 사람들의 이야기 공간, 에디터톡",
      location: "구로청년이룸",
      people: 28,
      deadline: "D-20",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35805/18014478-d8ac-4000-a5cf-70176dde43be/%EB%B0%B0%EB%84%88%EC%97%90%EB%94%94%ED%84%B0%ED%86%A1.png",
    },
    {
      id: 2,
      category: "취업",
      title: "[직무역량강화] 코딩테스트 대비로 취업하기 (코-취)",
      location: "구로 청년이룸",
      people: 15,
      deadline: "D-19",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35638/b368d74e-746a-4dae-9aa4-bcc5a9209470/2023%EC%B2%AD%EB%85%84%EC%A7%80%EC%9B%90%EC%82%AC%EC%97%85%EB%B6%80%EC%BD%94%EC%B7%A8cover.png",
    },
    {
      id: 3,
      category: "창업",
      title: "[창업] 스타트업에 성공의 날개를 달아줄 S-CLASS 창업 특강",
      location: "서울창업카페 낙성대점",
      people: "00",
      deadline: "D-12",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35916/2d0411b9-77c2-4673-aa00-8c21434da6e2/%ED%81%B4%EB%9E%98%EC%8A%A4%EC%B7%A8%EC%97%85%ED%8A%B9%EA%B0%95-%EB%9E%9C%EB%94%A9%EC%BB%A4%EB%B2%84.png",
    },
    {
      id: 4,
      category: "취업",
      title: "[실무경험] 2박3일 실무경험 프로젝트 2기 마케팅",
      location: "중소벤처기업연수원(안산)",
      people: 30,
      deadline: "D-12",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35866/47451226-8bfe-48c7-a9c1-97815f0fac21/20232%EB%B0%953%EC%9D%BC%EC%8B%A4%EB%AC%B4%EA%B2%BD%ED%97%98%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B82%EA%B8%B0landingpagecover.jpg",
    },
  ];

  showMClassList(data);
};

const showMClassList = (data) => {
  data.forEach((list) => {
    const mClassCard = document.createElement("div");
    mClassCard.classList.add("mClassCard");

    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", list.img);
    cardImage.setAttribute("alt", "mClassImage");

    const mClassPrice = document.createElement("div");
    mClassPrice.classList.add("mClassPrice");
    mClassPrice.innerText = "무료";

    const mClassInfoWrap = document.createElement("div");
    mClassInfoWrap.classList.add("mClassInfoWrap");

    const mClassCategory = document.createElement("span");
    mClassCategory.innerText = list.category;

    const mClassTitle = document.createElement("div");
    mClassTitle.innerText = list.title;

    const mClassLocation = document.createElement("span");
    mClassLocation.innerText = list.location;

    const mClassPeople = document.createElement("div");
    mClassPeople.classList.add("mClassPeople");
    mClassPeople.innerText = list.people + "명 모집";

    const mClassInfo = document.createElement("div");
    mClassInfo.classList.add("mClassInfo");

    const mClassRecruit = document.createElement("span");
    mClassRecruit.innerText = "기간 선발 모집중";

    const mClassDeadline = document.createElement("span");
    mClassDeadline.innerText = list.deadline;

    mClassBox.appendChild(mClassCard);
    mClassCard.appendChild(cardImage);
    mClassCard.appendChild(mClassPrice);
    mClassCard.appendChild(mClassInfoWrap);
    mClassInfoWrap.appendChild(mClassCategory);
    mClassInfoWrap.appendChild(mClassTitle);
    mClassInfoWrap.appendChild(mClassLocation);
    mClassInfoWrap.appendChild(mClassPeople);
    mClassInfoWrap.appendChild(mClassInfo);
    mClassInfo.appendChild(mClassRecruit);
    mClassInfo.appendChild(mClassDeadline);
  });
};

getMClassList();
