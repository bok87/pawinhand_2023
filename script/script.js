//1.모바일 메뉴 숨기기
// 객체 = 모바일메뉴 m_nav_open
// 객체.속성 -> style.display ='none'
//2.햄버거 메뉴 클릭 시 모바일 메뉴 보이기
// 객체 = 햄버거메뉴 m_nav, 모바일메뉴 m_nav_open
// 속성
// 이벤트
// 메서드
//3.x버튼 클릭 시 모바일 메뉴 숨기기
// 객체 = x버튼 close, 모바일메뉴 m_nav_open 
// 변수생성 - 객체가 곧 변수
const m_nav_open = document.querySelector('.m_nav_open');
const m_nav = document.querySelector('.m_nav');
const close = document.querySelector('#close');
//정상출력확인 에러메시지 또는 null, undefined 주의
console.log(m_nav_open, m_nav, close);
//1.모바일 메뉴 숨기기
m_nav_open.style.display='none';
//2-1.햄버거 메뉴 클릭 시 (객체. 이벤트)
m_nav.addEventListener('click',function(){
    //2-2모바일 메뉴 보이기
    m_nav_open.style.display='block';
})
//3-1.x버튼 클릭 시 
close.addEventListener('click',function(){
    //3-2모바일 메뉴 숨기기
    m_nav_open.style.display='none';
})

//main-swiper-slide
// const 변수명 = new Swiper('적용대상');
// const 변수명 = new Swiper('적용대상',{속성:값, 속성:값});
const pawin_slide = new Swiper('#pawin_slide', {
    autoplay:{ //자동재생
        delay:1000, //슬라이드 간격 (밀리초) 기본3초(3000)
        disableOnInteraction:false,//버튼클릭 후 자동재생유지
    },
    loop:true, //마지막슬라이드->첫번째 슬라이드 자연스러운 변경
    effect:'fade',// 제자리 변경 슬라이드효과
    // direction:'vertical' 세로 변경 슬라이드 효과 (기본값음 호리젠탈)
    navigation: { //이전, 다음 내비게이션 연결
        //next,prev 객체 연결 시 부모를 안적으면
        //body 안에 있는 모든 swiper-next,prev를 인식하기 때문에
        //개별인식가능한 부모이름을 반드시 앞에 먼저 작성한다.
        nextEl: '#pawin_slide .swiper-button-next',
        prevEl: '#pawin_slide .swiper-button-prev',
    }
});
const m_slide = new Swiper('#m_slide', {
    autoplay:{delay:1000}, loop:true, direction:'vertical',
    navigation: {
        nextEl: '#m_slide .swiper-button-next',
        prevEl: '#m_slide .swiper-button-prev',
    }
});
