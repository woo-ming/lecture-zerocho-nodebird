const initialState = {
  mainPosts: [
    {
      id: 1,
      user: {
        id: 1,
        nickname: "wooming",
      },
      content: "첫번 째 게시글 #헤시태그 #익스프레스,",
      images: [
        {
          src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
        },
      ],
      comments: [
        {
          user: {
            nickname: "nero",
          },
          content: "우와 개정판이 나왔군요~",
        },
        {
          user: {
            nickname: "hero",
          },
          content: "얼른 사고싶어요~",
        },
      ],
      imagePaths: [],
      postAdded: false,
    },
  ],
};

const ADD_POST = "ADD_POST";
const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  user: {
    id: 1,
    nickname: "wooming",
  },
  images: [],
  comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export { initialState, addPost };
export default reducer;
