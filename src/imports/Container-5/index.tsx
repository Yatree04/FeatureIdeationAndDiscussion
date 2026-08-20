function Text() {
  return <div className="bg-[#f97316] relative rounded-[26843500px] shrink-0 size-[6px]" data-name="Text" />;
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[16.5px] relative shrink-0 text-[#f97316] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Client A — Proposal
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(249,115,22,0.08)] content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative rounded-[26843500px] shrink-0" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return <div className="flex-[144.387_0_0] h-0 min-w-px relative" data-name="Text" />;
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['DM_Sans:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#999] text-[11px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        ▾
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#999] text-[11px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Trail
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative rounded-[26843500px] shrink-0" data-name="Button">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[8px] pt-[16px] px-[16px] relative shrink-0 w-[380px]" data-name="Container">
      <Container2 />
      <Text2 />
      <Button />
    </div>
  );
}

function TextArea() {
  return (
    <div className="absolute content-stretch flex flex-col h-[58px] items-start left-[16px] max-h-[130px] min-h-[58px] overflow-clip top-0 w-[348px]" data-name="Text Area">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(34,34,34,0.5)] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>{`What's on your mind…`}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[72.4px] relative shrink-0 w-full" data-name="Container">
      <TextArea />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['DM_Sans:Light',sans-serif] font-light leading-[18px] relative shrink-0 text-[#999] text-[18px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        +
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center relative rounded-[26843500px] shrink-0 size-[32px]" data-name="Button">
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['DM_Sans:Medium','Noto_Sans:Medium','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium leading-[16.5px] relative shrink-0 text-[#777] text-[11px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        ⊡
      </p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[16.5px] relative shrink-0 text-[#777] text-[11px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Screen
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[6px] h-[32px] items-center px-[12px] relative rounded-[26843500px] shrink-0" data-name="Button">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['DM_Sans:Medium','Noto_Sans:Medium','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium leading-[16.5px] relative shrink-0 text-[#777] text-[11px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        ◈
      </p>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[16.5px] relative shrink-0 text-[#777] text-[11px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Link
      </p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[6px] h-[32px] items-center px-[12px] relative rounded-[26843500px] shrink-0" data-name="Button">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['DM_Sans:Medium','Noto_Sans:Medium','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium leading-[16.5px] relative shrink-0 text-[#777] text-[11px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        ▣
      </p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[16.5px] relative shrink-0 text-[#777] text-[11px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Image
      </p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[6px] h-[32px] items-center px-[12px] relative rounded-[26843500px] shrink-0" data-name="Button">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return <div className="flex-[49.3_0_0] h-0 min-w-px relative" data-name="Text" />;
}

function Text13() {
  return (
    <div className="absolute flex h-[14px] items-center justify-center left-[-5.09px] top-[4.91px] w-[24px]">
      <div className="-rotate-90 flex-none">
        <div className="content-stretch flex flex-col h-[24px] items-center relative w-[14px]" data-name="Text">
          <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
            →
          </p>
        </div>
      </div>
    </div>
  );
}

function TextTransform() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0 w-[14px]" data-name="Text:transform">
      <Text13 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#e8e8e8] content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex items-center justify-center relative rounded-[26843500px] shrink-0 size-[36px]" data-name="Button">
      <TextTransform />
    </div>
  );
}

function Container4() {
  return (
    <div className="border-[#f5f5f5] border-solid border-t-[0.8px] content-stretch flex gap-[6px] items-center pb-[12px] pt-[8px] px-[12px] relative shrink-0 w-[380px]" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Text12 />
      <Button5 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.11)] size-full" data-name="Container">
      <Container1 />
      <Container3 />
      <Container4 />
    </div>
  );
}