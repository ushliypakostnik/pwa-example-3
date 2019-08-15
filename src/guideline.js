const lineHeightStandart = 1.428571429;

const GUIDELINE = {
  // Sizes and layouts
  gutter: 20,
  header_height: '10vmin',

  // Media breackpoints
  breackpoint_mg: '1700px',
  breackpoint_xl_max: '1699px',
  breackpoint_xl: '1400px',
  breackpoint_lg_max: '1399px',
  breackpoint_lg: '1250px',
  breackpoint_md_max: '1249px',
  breackpoint_md: '1050px',
  breackpoint_sm_max: '1049px',
  breackpoint_sm: '761px',
  breackpoint_xs_max: '760px',
  breackpoint_xs: '460px',
  breackpoint_min: '320px',

  // Colors
  color_white: '#ffffff',
  color_black: '#000000',

  color_dark: '#0f1118',

  color_border: '#eff2f5',

  // Typography
  fontfamily_sans: 'sans-serif',
  fontweight_sans_regular: 400,
  fontweight_sans_bold: 700,
  letterspacing_normal: 'normal',

  fontsize_large: 20,
  fontsize_normal: 16,
  fontsize_small: 14,

  // Effects
  transition_duration: '0.2s',
  transition_timingfunction: 'linear',
}

Object.assign(GUIDELINE, {
  color_text: GUIDELINE.color_white,

  color_link: GUIDELINE.color_text,
  color_link_hover: GUIDELINE.color_text,
  color_placeholder: GUIDELINE.color_border,

  // Good line height for all font sizes
  lineheight_large: Math.round(GUIDELINE.fontsize_large * lineHeightStandart),
  lineheight_normal: Math.round(GUIDELINE.fontsize_normal * lineHeightStandart),
  lineheight_small: Math.round(GUIDELINE.fontsize_small * lineHeightStandart),
});

Object.assign(GUIDELINE, {
  color_link: GUIDELINE.color_text,
  color_link_hover: GUIDELINE.color_text,
});

// console.log(GUIDELINE);

export default GUIDELINE;
