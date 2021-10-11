import {FileDto} from '../../file-dto';
import {NzUploadFile} from 'ng-zorro-antd';

export class NzFileWrapper {
  fileDto: FileDto;
  file: NzUploadFile;
  uploaded: boolean;
}
