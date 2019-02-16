import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

  click() {
    /*const client = new ApolloClient({
      link: createHttpLink({ uri: 'https://eu1.prisma.sh/uxname-46c706/ira/dev' }),
      cache: new InMemoryCache()
    });

    const query = gql`
    query {
      user(where: {email: "admin@admin.com"}) {
        email
      }
    }
  `;*/

  }

}
