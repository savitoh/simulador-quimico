module geral
!modificado em 28/09/2016

implicit none !!!!!chemical kinetics!!!!!

real*8,parameter::    teta=1,frac_a=1
integer,parameter::   amostra_tot=1,t_max=100
integer*4,parameter::   N=100000
integer ::      rx=12831, ry=834602, rz=183271, rw=7863
real*8::      r,z,P_AB,num_a(0:t_max),num_b(0:t_max)
real*8::      num_a2(0:t_max),num_b2(0:t_max)
integer::     Na,Nb,t,tm,A(1:N),B(1:N),i,idum,amostra
integer::     teste = 1
character*25::      name_arq='resultado-modificado.dat'
contains

!%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  FUNCTION kiss () result(rnd)
    Integer, PARAMETER :: IM1=1073741824
    real*8,parameter   :: AM=1.d0/IM1/4
    integer :: k
    real*8 :: rnd
    rx = 69069 * rx + 1327217885
    ry= ieor (ry, ishft (ry, 13)); ry= ieor (ry, ishft (ry, -17)); ry= ieor (ry, ishft (ry, 5))
    rz = 18000 * iand (rz, 65535) + ishft (rz, - 16)
    rw = 30903 * iand (rw, 65535) + ishft (rw, - 16)
    k =rx  + ry + ishft (rz, 16) + rw
    rnd=k*AM+0.5
  END FUNCTION kiss
!%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


subroutine metropolis

do tm=1,N
  r=kiss()
  i=int(r*N)+1

  if (A(i)==0) goto 100

  r=kiss()
  if (r<=P_AB)  then
   teste = 1 + teste;
   A(i)=0;Na=Na-1
   B(i)=1;Nb=Nb+1
  endif

100 enddo   !!!loop N!!!

end subroutine metropolis


end module geral
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
program cinetica
use geral
open(1,file=name_arq)

write(1,*) "#","teta=",teta
write(1,*) "#","numero de moleculas=",N
write(1,*) "#","amostras=",amostra_tot
write(1,*) "#","fracao inicial de A=", frac_a

z=kiss()
r=kiss()

num_a=0;num_b=0
num_a2=0;num_b2=0

P_AB=dexp(-1/teta)

do amostra=1,amostra_tot
  If (frac_a==1) goto 110
  A=0;B=1
  Na=0;Nb=N
  do while (Na.lt.frac_a*N)
     r=kiss()
     i=int(r*N)+1
     if (A(i)==0) then
        A(i)=1;B(i)=0
        Na=Na+1
        Nb=Nb-1
     endif
  enddo
  110 A=1;Na=N;B=0;Nb=0
  num_a(0)=num_a(0)+Na/N;num_b(0)=num_b(0)+Nb/N
  do t=1,t_max
    call metropolis
    num_a(t)=num_a(t)+1.d0*Na/N
    num_a2(t)=num_a2(t)+(1.d0*Na/N)*(1.d0*Na/N)
    num_b(t)=num_b(t)+1.d0*Nb/N
    num_b2(t)=num_b2(t)+(1.d0*Nb/N)*(1.d0*Nb/N)
  enddo
enddo !!! loop amostras

num_a=num_a/amostra_tot
num_b=num_b/amostra_tot
num_a2=num_a2/amostra_tot
num_b2=num_b2/amostra_tot

write(1,*) "#","teste", teste
do t=0,t_max
  write(1,10) 1.d0*t, &
    num_a(t), &
    num_b(t), &
    1.d0*int(kiss()*N)
    !!!!1.d0*int(ran2(iseed)*N)+1
enddo !!! tempo!!!
10    format(5F25.15)

end program
