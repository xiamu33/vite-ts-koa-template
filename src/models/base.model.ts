import { getModelForClass, Prop } from '@typegoose/typegoose';
import { AnyParamConstructor } from '@typegoose/typegoose/lib/types';

export class BaseModel {
  @Prop()
  public _id?: string;

  public id?: string;

  /** 创建时间 */
  @Prop()
  public created_at?: Date;

  /** 更新时间 */
  @Prop()
  public updated_at?: Date;
}

export function getModel<U extends AnyParamConstructor<unknown>>(cls: U) {
  return getModelForClass(cls, {
    schemaOptions: {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
      toJSON: {
        virtuals: true,
        getters: true,
        versionKey: false,
      },
      versionKey: false,
    },
  });
}
