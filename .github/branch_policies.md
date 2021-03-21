## Política de Branches
Para garantir um fluxo de trabalho contínuo e de forma padronizada possibilitando o rastreamento das funcionalidades desenvolvidas, será utilizada a estratégia de Git Flow.

Os conceitos chave para implementação da estratégia de Git Flow:
* main: contém o código de produção, todo o código que estamos desenvolvendo,que se encontra em uma versão mais estável.
*devel: contém o código do nosso próximo deploy, isso significa que conforme as features vão sendo finalizadas elas vão sendo agrupadas nessa branch para posteriormente passarem por mais uma etapa antes de integrar a main.
* feature/*: são branches para o desenvolvimento de uma funcionalidade específica, por convenção elas tem o nome iniciado por feature/, por exemplo: feature/cadastro-usuarios. - - Importante ressaltar que essas branches são criadas sempre à partir da branch devel.
* hotfix/*: são branches responsáveis pela realização de alguma correção crítica encontrada em produção e por isso são criadas à partir da master. Importante ressaltar que essa branch deve ser juntada tanto com a master quanto com a devel.
* doc/*: são branches responsáveis pela criação de documentação e/ou revisão de documentação já existente.
* automation/*: são branches responsáveis pela integração de alguma ferramenta auxiliar ao projeto.

![Imagem do fluxo das branches](../docs/assets/branches.png)

### Nomenclatura 
As branches  criadas devem estar relacionadas a uma funcionalidade ou correção, desta forma, atrelada a uma Issue. a descrição da branch deve ser escrita em portugues brasileiro, prefixado pela correspondente chave do Git Flow.

Exemplo:
* doc/IssueID-descrição-curta: documentações;
* feature/IssueID-descrição-curta:  funcionalidades;
* hotfix/IssueID-descrição-curta: correções;
* automation/IssueID-descrição-curta: implementação de ferramentas;

### Referência
* [Atlassian Bitbucket](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)
* [Git Breakdown](https://fga-eps-mds.github.io/2019.2-Git-Breakdown/docs/branches)
