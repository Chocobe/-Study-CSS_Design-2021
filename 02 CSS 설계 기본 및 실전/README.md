##### top
# Charter 02. CSS 설계 기본 및 실전

## CSS 설계의 목표

CSS 설계의 목표는 다음과 같습니다.

1. 예층 가능 하다
    * 스타일링의 ``영향 범위``를 예측할 수 있는지 여부 입니다.

2. 재사용 가능 하다.
    * 스타일을 사용할 때마다, ``수정 없이`` 사용 가능한지 여부 입니다.

3. 유지보수 가능 하다.
    * 새로운 모듈/기능 을 추가 할 때, 기존의 CSS에 ``영향을 주지 않는지`` 여부 입니다.

4. 확장 가능 하다.
    * 개발자가 추가 되어도 문제없이 관리할 수 있는지 여부 입니다.
    * 이는 CSS 설계 규칙의 ``학습비용이 높지 않은`` 상태를 말합니다.
    
    
    
<br/><br/>



## CSS 설계 포인트

CSS 설계에는 다음의 요소가 가미되어야 합니다.

1. 특성에 따라 분류한다.
2. HTML과 스타일을 느슨하게 결합한다.
3. 영향 범위를 지나치게 넓히지 않는다.
4. 특정한 콘텍스트에 지나치게 의존하지 않는다.
5. 상세도를 지나치게 높이지 않는다.
6. 클래스 이름에서 영향 범위를 유추할 수 있다.
7. 클래스 이름에서 형태, 기능, 역할을 유추할 수 있다
8. 확장하기 쉽다.



<br/>

[🐫 Top](#top)

<br/><br/>



## 1. 특성에 따라 분류된다.

CSS의 특성이란, ``역할`` 에 따른 분리를 말합니다.

역할은 크게 다음과 같이 나눌 수 있습니다.

1. 베이스 그룹
    * 프로젝트 전체에 동일하게 적용되는 스타일 입니다.
    * ``font-family`` , ``플루이드 이미지(Fluid Image)`` 등...
    
<br/>

2. 레이아웃 그룹
    * 레이아웃 하위에 어떠한 모듈이 들어와도 레이아웃을 유지하도록 하는 스타일 입니다.
    * ``전역 width`` , ``전역 margin`` , ``전역 padding`` 등...
    
<br/>

3. 모듈 그룹
    * 사이트의 어느곳에서나 재사용할 수 있도록 구성된 스타일 입니다.
    * 자신이 배치되는 곳에 유연하게 사용될 수 있는 스타일을 가지게 만듭니다.
    * (``width: 100%``)
    * 모듈 하위에 속한 요소들의 레이아웃이나 스타일에만 관여 합니다.
    
<br/>

4. 위 세가지 그룹의 계층은 다음과 같습니다.
```html
<베이스_그룹>
  <레이아웃_그룹>
    <모듈A></모듈A>
    <모듈B></모듈B>
    <모듈C></모듈C>
  </레이아웃_그룹>
</베이스_그룹>
```



<br/><br/>



## 2. HTML 과 스타일링을 느슨하게 결합한다.

HTML과 강하게 결합된 상태란, ``태그``, ``특성 속성값`` 에 대한 스타일링을 말합니다.

``태그`` 를 셀렉터로 사용한 스타일은, ``태그`` 가 변경되면 스타일이 적용되지 않습니다.

또한 ``특성 속성값`` 을 셀렉터로 사용하면, 동일한 문맥의 ``다른 특성 속성값`` 에는 스타일이 적용되지 않습니다.

<br/>

HTML과 느슨하게 결합된 상태란, ``HTML Tag 셀렉터`` 또는 ``특정 속성값 셀렉터`` 를 사용하지 않는 것입니다.



<br/><br/>



## 3. 영향 범위를 지나치게 넓히지 않는다.

범용적으로 사용하는 태그인 ``div`` , ``span`` 등은 하나의 모듈 안에서도 여러가지 스타일을 가질 수 있습니다.

만약, ``span`` 태그에 스타일을 준다면, 해당 모듈의 ``모든 span`` 에는 의도치 않은 스타일이 적용되게 됩니다.

다음 코드는 ``영향 범위가 지나치게 넓은 CSS`` 코드 입니다.

```css
.main-module span {
  color: #ff1493;
}
``` 

<br/>

위 코드는 ``.main-module`` 의 모든 ``span`` 에 폰트색상이 적용되므로, 의도치 않은 스타일이 적용될 수 있습니다.

이러한 문제는 ``영향 범위를 줄이는`` 방법으로 해소할 수 있습니다.

```css
.main-module > span {
  color: #ff1493;
}
```

<br/>

수정한 코드는 처음보다는 ``영향 범위가 줄었습니다``

하지만, 더 좋은 방법은 ``스타일 클래스`` 를 할당하는 것입니다.

```css
.main-module .sub-text {
  color: #ff1493;
}
```

<br/>

최종 수정한 코드는 ``.main-module`` 하위의 ``.sub-text`` 에만 스타일이 적용되므로, 같은 ``Module 내`` 에서 영향범위가 최소화 되었다고 할 수 있습니다.



<br/><br/> 



## 4. 특정한 컨텍스트에 의존하지 않는다.

특정 컨텍스트란, 특정한 문맥을 말합니다. 

메인 페이지 컨테이너를 ``#main`` 이라고 가정하고, ``#main`` 에 의존하는 모듈의 셀렉터를 만들면 다음과 같습니다.

```css
#main .my-module {
/* ... */
}
```

<br/>

``Module`` 로써 스타일을 정의 했다면, ``프로젝트 어디에서나 재사용할 수 있는 스타일`` 을 의미하게 됩니다.

하지만, 위의 ``#main .my-module`` 셀렉터는 ``#main`` 컨테이너 내부에서만 동작하는 문제가 발생 합니다.

이는 ``Module`` 로써 기능을 상실한 상태라고 볼 수 있습니다.

따라서 ``Module`` 스타일을 작성한다면, ``컨텍스트에 독립적인`` 셀렉터를 사용해야 합니다.

```css
.my-module {
/* ... */
}
```



<br/><br/>



## 5. 상세도를 지나치게 높이지 않는다.

상세도가 높다는 것은, ``상위 ~ 하위`` 관계를 구체적으로 만든 형식을 말합니다.

상세도가 지나치게 높게 되면, 다음과 같은 문제점이 있습니다.

1. 셀렉터를 예측하기 어렵습니다.
2. 상위요소에 대한 ``의존도가 높습니다``
3. 스타일을 덮어쓰기 어렵습니다.
4. 유지보수가 힘듭니다.

<br/>

먼저 상세도를 낮추는 가장 쉬운 방법은 ``스타일 class`` 를 셀렉터로 사용하는 것입니다.

만약 ``스타일 ID`` 를 사용했다면, ``스타일 ID`` 자체가 ``상세도가 최상`` 이므로, 부적합 합니다.

```css
#my-id {
/* 최상의 상세도 입니다 */
}
```

``요소`` 셀렉터 역시 특정 ``요소`` 에 지나치게 의존합니다.

```html
<article>
/* 요소 태그에 지나친 의존 입니다 */
</article>
```

<br/>

``스타일 class`` 를 사용하더라도, 부모관계를 모두 명시하지 않고, 필수 셀렉터만을 사용하도록 합니다.

```css
.my-style {
/* ... */
}
```



<br/><br/>



### 06. 클래스 이름에서 영향 범위를 유추할 수 있다.

클래스명을 통해서 ``특정 Module`` 내에서만 사용가능한 스타일인지, Module 과 상관없이 ``재사용 가능한 스타일 인지`` 를 유추할 수 있어야 합니다.

``bl_my_module`` 이라는 Module 내에서만 적용되는 제목 스타일을 ``.title`` 이라고 한다면, ``bl_my_module`` 밖에서도 사용할 수 있을 것 같은 의미를 가지게 됩니다.

이러한 경우가 ``영향 범위를 유추할 수 없는`` 클래스 명 입니다.

```html
<div class="bl_my_module">
  <!-- .title 이라는 클래스는 마치 전역에서 사용할 수 있을 것 같습니다 -->
  <div class="title">제목</div>
</div>
```

```css
.bl_my_module {
/* ... */
}

.bl_my_module .title {
/* .bl_my_module 밖에서는 사용할 수 없는 스타일 클래스 입니다 */
}
```

<br/>

``bl_my_module`` 내에서만 사용하는 제목 클래스명을 ``bl_my_module_title`` 이라고 명명한다면, 클래스명만 봐도 ``bl_my_module`` 내에서만 사용할 수 있음을 파악할 수 있습니다.

<br/>

```html
<div class="bl_my_module">
  <!-- .bl_my_module 밖에서는 사용할 수 없다는 것을 파악할 수 있습니다 -->
  <div class="bl_my_title">제목</div>
</div>
```

```css
.bl_my_module {
/* ... */
}

.bl_my_module_title {
/* .bl_my_module 내부에서만 사용할 수 있는 스타일 클래스 라는것을 파악할 수 있습니다 */
}
```



<br/><br/>



## 07. 클래스 이름에서 형태, 기능, 역할을 유추할 수 있다.

``Module`` 은 프로젝트 전체에서 범용적으로 재사용할 수 있도록 만듭니다.

또한 ``Module`` 은 한가지가 아닌 여러종류가 될 수 있습니다.

이러한 ``Module`` 을 다음과 같은 클래스명으로 만든다면, ``Module`` 의 기능이나 혁할, 형태를 파악할 수 없습니다.
* bl_module1
* bl_module2
* bl_module3

<br/>

``Module`` 명을 다음과 같이 만든다면, ``Module 명`` 을 통해서 형태, 기능, 역할을 파악할 수 있습니다.

* ``bl_media`` : 웹 개발에서는 ``media`` 를 ``가로로 펼쳐진 텍스트 블록`` 이라는 의미로 통용된다고 합니다.
* ``bl_accordion`` : 아코디언 처럼 접히는 형태와 기능을 유추할 수 있습니다.
* ``bl_slider`` : 슬라이드 기능을 유추할 수 있습니다.
* ``bl_card`` : 카드형태를 유추할 수 있습니다.
* ``bl_list`` : 목록 형태를 유추할 수 있습니다.

<br/>

``Module 명`` 을 만들 때, 주의해야 할 점은 ``특정 페이지`` 또는 ``특정 서비스`` 를 명시하게 되면, 재사용시 ``Module 명`` 에 부적합한 곳에 사용된 것 처럼 파악될 수 있습니다.

따라서 ``Module 명`` 은 형태, 기능, 역할을 나타내는 정도의 ``추상적`` 인 이름이 좋습니다.



<br/><br/>



## 08. 확장하기 쉽다.

여기서 ``확장하기 쉽다``란, ``가능한 변경을 견딜 수 있도록 설계`` 한다는 뜻 입니다.

클래스를 설계하는데는 두가지 방법이 있습니다.

* 싱글 클래스 (Single Class)
* 멀티 클래스 (Multi Class)

``확장하기 쉽다``에 초점을 두면, ``멀티 클래스(Multi Class)`` 설계를 채용하는 것이 유리합니다.

이유는 다음과 같은 특징이 있기 때문입니다.

|분류|싱글 클래스 (Single Class)|멀티 클래스 (Multi Class)|
|---|---|---|
|클래스 정의|모듈 클래스를 항상 ``단일 클래스``로 만듭니다|형태, 기능, 역할에 따라 ``분리된 형식으로 클래스``를 만듭니다|
|HTML상의 Class 형태|class가 하나이므로, HTML 코드가 간결합니다|형태, 기능, 역할에 따라 복수의 class를 가지게 됩니다|
|CSS 상의 class 정의|중복코드가 많아지므로, CSS코드가 비대화 됩니다|형태, 기능, 역할에 맞는 스타일을 구조적으로 만들게 됩니다|
|단점|CSS 모듈 확장성이 낮습니다|프로젝트 상의 CSS 학습비용이 발생합니다|

위의 예로써 버튼 요소에 대한 스타일을 작성해 보면 다음과 같습니다.

<br/>

### 싱글 클래스 (Single Class)

```html
<!-- html 소스코드 (싱글 클래스) -->

<button class="el_btn">
  기본버튼
</button>

<button class="el_btnCancel">
  취소버튼
</button>
```

```css
/* 기본버튼 스타일 (싱글 클래스) */
.el_btn {
  width: 300px;
  max-width: 100%;

  padding: 20px 10px;

  display: inline-block;

  font-size: 18px;
  text-align: center;
  text-decoration: none;
  
  transition: all 0.3s;
}
```

<br/>

### 멀티 클래스 (Multi Class)

```html
<button class="el_btn">
  기본 버튼
</button>

<button class="el_btn hp_cancel">
  취소버튼
</button>
```

```css
.el_btn {
  width: 300px;
  max-width: 100%;

  padding: 20px 10px;

  display: inline-block;

  font-size: 18px;
  text-align: center;
  text-decoration: none;

  transition: all 0.3s;
}

/* 헬퍼 클래스(Helper Class) 또는 유틸리티 클래스(Utility Class) */
.hp_cancel {
  color: #bb852b;
  font-weight: 800;
}
```

<br/>

위의 예시와 같이 ``싱글 클래스 (Single Class)``는 중복 코드의 문제도 있으며, 코드 확장성이 낮기 때문에 CSS 설계방법에는 사용되지 않습니다.

즉, ``OOCSS``, ``SMACSS``, ``BEM``, ``PRECSS`` 와 같은 CSS 설계 기법에서는 ``멀티 클래스 (Multi Class)`` 를 기본으로 사용 합니다.



<br/>

[🐫 Top](#top)

<br/><br/>
