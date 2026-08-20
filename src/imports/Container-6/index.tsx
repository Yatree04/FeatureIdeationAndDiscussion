function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[25px] relative shrink-0 text-[#111] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Where you left off…
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pt-[4px] relative shrink-0 w-[206.813px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#ababab] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Trail since Aug 14 · auto-logged today
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[206.813px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container3() {
  return <div className="bg-[#f0f0f0] relative rounded-[26843500px] shrink-0 size-[40px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[12px] pt-[20px] px-[20px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#111] content-stretch flex flex-col h-[19px] items-center justify-center left-0 px-[8px] py-[2px] rounded-[26843500px] top-0" data-name="Button">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[10px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        All
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#f0f0f0] content-stretch flex flex-col h-[19px] items-center justify-center left-[33.52px] px-[8px] py-[2px] rounded-[26843500px] top-0" data-name="Button">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#999] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        proposal_v4.docx
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#f0f0f0] content-stretch flex flex-col h-[19px] items-center justify-center left-[140.63px] px-[8px] py-[2px] rounded-[26843500px] top-0" data-name="Button">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#999] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Figma — Deck
      </p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#f0f0f0] content-stretch flex flex-col h-[19px] items-center justify-center left-[228.73px] px-[8px] py-[2px] rounded-[26843500px] top-0" data-name="Button">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#999] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Q3 Revenue
      </p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#f0f0f0] content-stretch flex flex-col h-[19px] items-center justify-center left-0 px-[8px] py-[2px] rounded-[26843500px] top-[25px]" data-name="Button">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#999] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        client-notes.md
      </p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#f0f0f0] content-stretch flex flex-col h-[19px] items-center justify-center left-[98.01px] px-[8px] py-[2px] rounded-[26843500px] top-[25px]" data-name="Button">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#999] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Linear board
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#777] text-[12px] w-[320px]" style={{ fontVariationSettings: '"opsz" 14' }}>{`This trail has been active across 5 items over 6 days. Most activity clusters around the proposal doc and Figma deck — you've been iterating on pricing framing. The Q3 revenue sheet was opened twice but not edited. Client notes have the most recent writes.`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[20px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Paragraph1 />
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-[156_0_0] flex-col h-full items-center justify-center min-w-px py-[10px] relative rounded-[12px]" data-name="Button">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[#ababab] text-[13px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Revive workspace
      </p>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#111] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.12)] flex flex-[156_0_0] flex-col h-full items-center justify-center min-w-px py-[10px] relative rounded-[12px]" data-name="Button">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Contextualise
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-[47.5px] items-start p-[4px] relative rounded-[16px] shrink-0 w-[320px]" data-name="Container">
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-[83.5px] items-start pb-[20px] pt-[16px] px-[20px] relative shrink-0 w-[360px]" data-name="Container">
      <Container7 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.09)] size-full" data-name="Container">
      <Container1 />
      <Container4 />
      <Container6 />
    </div>
  );
}