module.exports = {
  name: 'cloud-messenger',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/cloud-messenger',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
