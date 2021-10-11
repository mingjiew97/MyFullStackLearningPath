import React from 'react';
import './App.css';
import {Button, Icon, Upload} from "antd";
import AWS, {config, S3} from "aws-sdk";
import { Subject } from 'rxjs';

// https://juejin.im/post/5ca56c2551882543e641bc8e

const Upload$ = (s3Config, bucket, key, body) => {
  console.log(key);
  const s3 = createS3(s3Config);
  const s3subject = new Subject();
  s3.putObject(
    {
      Body: body.file,
      Bucket: bucket,
      Key: key,
    },
    (err, resp) => {
      if (err) {
        console.log(err);
        s3subject.error(err);
      } else {
        s3subject.next(resp);
      }
    }).on('httpUploadProgress', (progress) => {
    const percent = 100 * progress.loaded / progress.total;
    body.onProgress ? body.onProgress({ percent }, body.file) : void 0;
    if (percent === 100 && body.onSuccess) body.onSuccess();
  }).on('httpError', (err) => {
    if (err && body.onError) {
      console.log(err);
      body.onError();
      s3subject.error(err);
    }
  });
  return s3subject;
};

const createS3 = (cfg) => {
  const setting = {
    accessKeyId: cfg.accessKeyId,
    secretAccessKey: cfg.secretAccessKey
  };
  config.update(setting);
  config.region = "us-east-2";
  console.log(AWS);
  const s3 = new S3({
    apiVersion: '2006-03-01',
  });
  return s3;
};

class App extends React.Component {

  S3token = {
    accessKeyId: 'AKIAX5O4QAJEBAAPY4EX',
    secretAccessKey: '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',
  };
  bucket = 'msi-0219-images-robert';

  upload = (param) => {
    console.log(param);
    Upload$(this.S3token, this.bucket, param.file.name, param).subscribe(
        () => console.log('成功'),
        () => console.log('失败')
    );
  }

  render() {
    return (
      <div>
        <Upload customRequest={this.upload}>
          <Button>
            <Icon type="upload" /> Upload
          </Button>
        </Upload>
      </div>
    );
  }

}

export default App;
