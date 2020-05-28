import { StudentsModule } from './student/students.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose'
import { config } from './orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://geral:11019601@cluster0-kbti7.mongodb.net/test?retryWrites=true&w=majority'),
    TypeOrmModule.forRoot(config),
    UsersModule, 
    TasksModule,
    AuthModule,  
    StudentsModule,        
  ],
  controllers: [
        AppController,],
  providers: [
        AppService,],
})
export class AppModule {}