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
