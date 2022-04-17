import { Component, OnInit } from '@angular/core';
import { RepositoryUserService } from '../repository-user.service';
import { User } from '../users';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  

  user!: User;
  repositories: any;
  constructor(private repositoryUserService: RepositoryUserService) { }

  ngOnInit(): void {
    this.getUserDetails('BECKY-OCHOLLA');
    this.getUserRepositories('BECKY-OCHOLLA');
  }

  //user details
  getUserDetails(githubUsername: string) {
    this.repositoryUserService.getUserResponse(githubUsername).then(
      (response) => {
        this.user = this.repositoryUserService.getUserDetails;
      },
      (error) => {
        console.log(error);
      }
    ); 
  }


  //user repositories
  getUserRepositories(githubUsername: string) {
    this.repositoryUserService.getRepositoryResponse(githubUsername).then(
      (response) => {
        this.repositories = this.repositoryUserService.getRepositoryDetails;
        console.log(this.repositories);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}