import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    image: string;

    @ManyToOne(() => User, user => user.posts)
    @JoinColumn({name: 'user_id'})
    user: User;
}