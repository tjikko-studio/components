export default {
  gridTemplateAreas: {
    'form': [
      '  label-1   label-2   label-3   label-4   label-5   label-6   label-7   label-8   label-9   label-10   label-11   label-12',
      'control-1 control-2 control-3 control-4 control-5 control-6 control-7 control-8 control-9 control-10 control-11 control-12',
      '   info-1    info-2    info-3    info-4    info-5    info-6    info-7    info-8    info-9    info-10    info-11    info-12',
      '  error-1   error-2   error-3   error-4   error-5   error-6   error-7   error-8   error-9   error-10   error-11   error-12'
    ]
  },
  gridTemplateColumns: {
    'form': 'repeat(12, minmax(0, 1fr))'
  },
  gridTemplateRows: {
    'form': 'repeat(4, minmax(0, 1fr))'
  }
}
