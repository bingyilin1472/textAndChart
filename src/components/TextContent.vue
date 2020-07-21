<template>
    <div class="text-content" @mousedown.stop="selectText()">
    <!-- 之後文字內容要用載入的不然我的HTML太難看   -->
      <p class="p p1"><strong>Jeff Su</strong></p>
      <p class="p p1">Ladies and gentlemen, welcome to TSMC's Second Quarter 2020 Earnings Conference Call. This is Jeff Su, TSMC's Director of Investor Relations and your host for today.</p>
      <p class="p p1">To prevent the spread of COVID-19, TSMC is hosting our earnings conference call via live audio webcast through the Company's website at www.tsmc.com, where you can also download the earnings release materials. If you are joining us through the conference call, your dial-in lines are listen-only mode.</p>
      <p class="p p1">The format for today's event will be as follows. First, TSMC's Vice President and CFO, Mr. Wendell Huang, will summarize our operations in the second quarter 2020, followed by our guidance for the third quarter 2020. Afterwards, Mr. Huang, and TSMC's CEO, Dr. C. C. Wei, will jointly provide the Company's key messages. Then TSMC's Chairman, Dr. Mark Liu will host a Q&amp;A session, where all three executives will entertain your questions.</p>
      <p class="p p1">As usual, I would like to remind everybody that today's discussions may contain forward-looking statements that are subject to significant risks and uncertainties which could cause actual results to differ materially from those contained in the forward-looking statements. Please refer to the Safe Harbor notice that appears in our press release.</p>
      <p class="p p1">And now, I would like to turn the call over to TSMC's CFO, Mr. Wendell Huang for the summary of operations and current quarter guidance.</p>
      <p class="p p1"><strong>Wendell Huang</strong></p>
      <p class="p p1">Thank you, Jeff. Good afternoon, everyone. Second quarter revenue was flat sequentially, as the continued 5G infrastructure deployment and HPC related product launches offset weaknesses in other platforms. Gross margin increased 1.2 percentage points sequentially to 53%, mainly due to continuing high level of utilization and the absence of unfavorable inventory valuation adjustment, partially offset by NT$ appreciation in the second quarter.</p>
      <p class="p p1">Total operating expenses increased by NT$1.19 billion, mainly as TSMC supported a range of COVID-19 relief efforts. Operating margin increased by 0.8 percentage points sequentially to 42.2%. Overall, our second quarter EPS was NT$4.66 and ROE was 28.5%.</p>
      <p class="p p1">Now let's move on to the revenue by technology. 7 nano process technology contributed 36% of wafer revenue in the second quarter, while 16 nanometer contributed 18%. Advanced technologies, which are defined as 16 nanometer and below, accounted for 54% of wafer revenue.</p>
      <p class="p p1">Moving onto revenue contribution by platform, smartphones decreased 4% quarter-over-quarter to account for 47% of our second quarter revenue. HPC increased 12% to account for 33%. IoT decreased 5% to account for 8%. Automotive decreased 13% to account for 4%. Digital consumer electronics decreased 9% to account for 5%.</p>
      <p class="p p1">Moving on to the balance sheet, we ended the second quarter with cash and marketable securities of NT$605 billion. On the liabilities side, current liabilities increased by NT$25 billion, mainly due to the increase of NT$30 billion in short-term loans. On financial ratios accounts receivables turnover days increased 2 days to 44 days. Days of inventory also increased 2 days to 55 days mainly due to N5 ramp and stronger N7 demand.</p>
      <p class="p p1">Now let me make a few comments on cash flow and CapEx. During the second quarter, we generated above NT$170 billion in cash from operations, spent NT$127 billion in CapEx and distributed NT$65 billion for third quarter cash dividend. We also increased NT$30 billion in short-term loans and issued NT$36 billion of corporate bonds. Overall, our cash balance increased NT$37 billion to NT$468 billion at the end of the quarter. In U.S. dollar terms, our second quarter capital expenditures amounted to US$4.2 billion.</p>
      <div class="p_count"></div>
      <p class="p p2">I finished my financial summary. Now, let's turn to our third quarter guidance. Based on the current business outlook, we expect our third quarter revenue to be between US$11.2 billion and US$11.5 billion, which represents a 9.3% sequential increase at the midpoint. Based on the exchange rate assumption of US$1 to NT$29.5 gross margin is expected to be between 50% and 52%, operating margin between 39% and 41%.</p>
      <p class="p p2">Now, I will hand over the call to CC for his key messages.</p>
    </div>
</template>

<script>
    export default {
        name: "TextContent",
        methods:{
          selectText(){
            alert('Select')
          }
        }
    }
</script>

<style scoped>
  .text-content{
    /* margin 控制外部元件之間、padding 控制content與border距離*/
    margin: 0 5px;
    /* 上下內距15px 左右內距20px */
    padding: 15px 20px;
  }
</style>
