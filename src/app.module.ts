import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { BootcampsModule } from './bootcamps/bootcamps.module';

@Module({
  
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bootcamps_ptech',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
      dropSchema: true
    }),
    
    BootcampsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
