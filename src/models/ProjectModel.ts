import { modelOptions, Prop } from '@typegoose/typegoose';
import { BaseModel } from './base.model';

@modelOptions({ schemaOptions: { collection: 'project' } })
export class ProjectModel extends BaseModel {
  @Prop({ required: true, type: String })
  public project_root: string;

  @Prop({ required: true, type: String })
  public project_name: string;

  @Prop({ required: true, type: String })
  public git_version: string;

  @Prop({ type: Boolean, default: false })
  public disabled?: boolean;

  @Prop({ type: () => ProjectEvent, required: true, _id: false })
  public events: ProjectEvent[];
}

class ProjectEvent {
  @Prop({ required: true, type: String })
  public event_name: string;

  @Prop({ type: Boolean, default: false })
  public disabled?: boolean;

  @Prop({ type: () => ProjectEventScript, required: true, _id: false })
  public scripts: ProjectEventScript[];
}

class ProjectEventScript {
  @Prop({ required: true, type: String })
  public script_name: string;

  @Prop({ required: true, type: String })
  public script_text: string;

  @Prop({ required: true, type: Number })
  public param_count: number;

  @Prop({ type: Boolean, default: false })
  public disabled?: boolean;

  @Prop({ required: true, type: Boolean })
  public quote_script: boolean;

  @Prop({ type: String, default: '' })
  public quote_from?: string;

  @Prop({ required: true, type: [String] })
  public param_list: string[];
}
