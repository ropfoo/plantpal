import Svg, {
  Circle,
  Ellipse,
  Path,
  Defs,
  Stop,
  LinearGradient,
} from 'react-native-svg';

export default function GhostBlue() {
  return (
    <Svg width='60' height='58' viewBox='0 0 60 58' fill='none'>
      <Ellipse
        cx='29.4429'
        cy='54.0139'
        rx='18.7264'
        ry='3.28533'
        fill='#1E336B'
        fillOpacity='0.05'
      />
      <Path
        d='M59.7076 38.833C59.7076 38.833 59.7076 47.684 23.8077 47.684C10.6772 47.684 0.0328979 37.0396 0.0328979 23.9092C0.0328979 10.7787 10.6772 0.134399 23.8077 0.134399C51.8619 0.134399 59.7076 38.833 59.7076 38.833Z'
        fill='url(#paint0_linear_1_17)'
      />
      <Circle
        cx='28.8004'
        cy='18.9165'
        r='4.9927'
        fill='url(#paint1_linear_1_17)'
      />
      <Circle
        cx='11.2071'
        cy='18.9165'
        r='4.9927'
        fill='url(#paint2_linear_1_17)'
      />
      <Circle
        cx='11.2071'
        cy='18.9165'
        r='4.9927'
        fill='url(#paint3_linear_1_17)'
      />
      <Path
        d='M24.7587 24.3847C24.7587 25.0091 24.6357 25.6274 24.3967 26.2043C24.1578 26.7812 23.8075 27.3054 23.366 27.7469C22.9245 28.1885 22.4003 28.5387 21.8234 28.7777C21.2465 29.0166 20.6282 29.1396 20.0037 29.1396C19.3793 29.1396 18.761 29.0166 18.1841 28.7777C17.6072 28.5387 17.083 28.1885 16.6415 27.7469C16.1999 27.3054 15.8497 26.7812 15.6107 26.2043C15.3718 25.6274 15.2488 25.0091 15.2488 24.3847L20.0037 24.3847H24.7587Z'
        fill='url(#paint4_linear_1_17)'
      />
      <Path
        d='M24.7587 24.3847C24.7587 25.0091 24.6357 25.6274 24.3967 26.2043C24.1578 26.7812 23.8075 27.3054 23.366 27.7469C22.9245 28.1885 22.4003 28.5387 21.8234 28.7777C21.2465 29.0166 20.6282 29.1396 20.0037 29.1396C19.3793 29.1396 18.761 29.0166 18.1841 28.7777C17.6072 28.5387 17.083 28.1885 16.6415 27.7469C16.1999 27.3054 15.8497 26.7812 15.6107 26.2043C15.3718 25.6274 15.2488 25.0091 15.2488 24.3847L20.0037 24.3847H24.7587Z'
        fill='url(#paint5_linear_1_17)'
      />
      <Defs>
        <LinearGradient
          id='paint0_linear_1_17'
          x1={14.06}
          y1={-12.9417}
          x2={59.4698}
          y2={41.2648}
          gradientUnits='userSpaceOnUse'>
          <Stop offset={0.0729171} stopColor='white' />
          <Stop offset={0.428981} stopColor='#00E0D3' />
          <Stop offset={1} stopColor='#005AE1' />
        </LinearGradient>
        <LinearGradient
          id='paint1_linear_1_17'
          x1='28.8004'
          y1='13.9238'
          x2='28.8004'
          y2='23.9092'
          gradientUnits='userSpaceOnUse'>
          <Stop offset='0.364583' stopColor='#000A24' />
          <Stop offset='0.739583' stopColor='#1E336B' />
        </LinearGradient>
        <LinearGradient
          id='paint2_linear_1_17'
          x1='11.2071'
          y1='13.9238'
          x2='11.2071'
          y2='23.9092'
          gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#000A24' />
          <Stop offset='0.619792' stopColor='#1E336B' />
        </LinearGradient>
        <LinearGradient
          id='paint3_linear_1_17'
          x1='11.2071'
          y1='13.9238'
          x2='11.2071'
          y2='23.9092'
          gradientUnits='userSpaceOnUse'>
          <Stop offset='0.364583' stopColor='#000A24' />
          <Stop offset='0.739583' stopColor='#1E336B' />
        </LinearGradient>
        <LinearGradient
          id='paint4_linear_1_17'
          x1='20.0037'
          y1='19.6297'
          x2='20.0037'
          y2='29.1396'
          gradientUnits='userSpaceOnUse'>
          <Stop stop-color='#000A24' />
          <Stop offset='0.619792' stopColor='#1E336B' />
        </LinearGradient>
        <LinearGradient
          id='paint5_linear_1_17'
          x1='20.0037'
          y1='19.6297'
          x2='20.0037'
          y2='29.1396'
          gradientUnits='userSpaceOnUse'>
          <Stop offset='0.364583' stopColor='#000A24' />
          <Stop offset='0.739583' stopColor='#1E336B' />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
