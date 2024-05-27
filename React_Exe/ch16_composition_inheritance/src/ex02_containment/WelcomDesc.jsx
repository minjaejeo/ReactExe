import FancyBorder from "./FancyBorder";

export default function WelcomeDesc(props){
    return(
        <FancyBorder color="red">
        {/* 아래 부분의 FancyBorder의 children으로 구성된다. */}
        <h1 className="Desc-title">
            어서오세요
        </h1>
        <p>
            <img src="https://i.namu.wiki/i/k40a-MGPW6U5oQkjUcmIfiYIyV6ifpzhyjPrykNsyJ103aiv5o_jUuOqMGO7E85u9bebudIRRH51kqB7gKwGLFPqg4nVFm9tKpiNchR9hHQq2cgR0p7Ons8MAGEAHo318To7ssihdJmUtQOd0vxRaw.webp" alt="블루베리" />
        </p>
        <p className="Desc-summing">
        껌에 대한 내용은 블루베리(껌) 문서를, 방송 프로그램에 대한 내용은 블루베리(SBS CNBC) 문서를, 웹 애니메이션 Inanimate Insanity의 캐릭터에 대한 내용은 블루베리(Inanimate Insanity) 문서를 참고하십시오.
        </p>
        <p className="Desc-description">
        북아메리카를 비롯한 북반구 전역에 분포하는 식물 및 열매. 이름과 달리 딸기, 라즈베리, 블랙베리 등의 베리류와는 전혀 관계가 없는 진달래과 식물[1]이다.
        </p>
    </FancyBorder>
    )
}