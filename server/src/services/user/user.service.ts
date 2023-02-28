import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService 
{
    constructor(@InjectModel(User.name) private userModel:Model<UserDocument>) {}

    async getAll(): Promise<User[]>
    {
        try 
        {
            let user = await this.userModel.find().exec();
            return user;
        }
        catch (error) 
        {
            return null;
        }
    }

    async getById(id: string): Promise<User>
    {
        try
        {
            let user = await this.userModel.findById(id).exec();
            return user;
        }
        catch (error)
        {
            return null;
        }
    }

    async getCreate(user: User): Promise<User>
    {
        try
        {
            let newUser = new this.userModel(user);
            return await newUser.save();
        }
        catch (error)
        {
            return null;
        }
    }

    async deleteById(id: string): Promise<User>
    {
        try
        {
            let user = await this.userModel.findByIdAndDelete(id).exec();
            return user;
        }
        catch(error)
        {
            return null;
        }
    }

    async updateById(_id: string, user: User): Promise<User>
    {
        try
        {
            let userupdate = await this.userModel.findByIdAndUpdate(_id, user).exec();
            return userupdate;
        }
        catch(error)
        {
            return null;
        }
    }
}
